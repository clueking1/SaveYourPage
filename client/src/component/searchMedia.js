import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import API from '../utils/API'
import { CardImgOverlay, CardTitle } from 'reactstrap';



const SearchMedia = (props) => {
  const [over, setOver] = useState({
    id: '',
    title: '',
    author: '',
    snip: ''
  })

  function openNav(id) {
    document.getElementById("myNav").style.width = "100%";
    console.log(over)
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    //console.log(over)
  }

  function overlay(id) {
    API.overlayBook(id)
      .then(res => {
        console.log(res.data)
        setOver({
          id: res.data.id,
          title: res.data.volumeInfo.title,
          author: res.data.volumeInfo.authors[0],
          snip: res.data.volumeInfo.description,
          link: res.data.volumeInfo.previewLink
        })
      })
      .then(() => {
        openNav()
      })
  }

  function saveBook(e) {
    e.preventDefault()
    console.log('heyyo')
}

  return (
      <div>
        {props.data.items.map(t => (
          
          <div className="nestedWrapper" key={t.id}>      
                <div className="image">
                <img src={t.volumeInfo.imageLinks.thumbnail} alt="img1"/>
              </div>
              <span onClick={() => overlay(t.id) }>View More</span>
          </div>
         ))} 
            <div id="myNav" className="overlay">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav} >&times;</a>
                <div className="overlay-content">
                  <div className="overlaySearched">
                    <div className="bookInfo">
                      <h3>{over.title}</h3>
                      {/* <p>{item.volumeInfo.authors[0]}</p> */}
                      <p>Author: <i>{over.author}</i></p>
                    </div>
                    <div className="buttonGroup">
                      <a href={over.link} target="_blank">View</a>
                      <a href="javascript:void(0)" onClick={saveBook}>Save</a>
                    </div>
                
                    <div className="description">
                      <p>{over.snip}</p>
                    </div>
                  </div> 
                </div>
            </div>
          
      </div>
       
    
      
  );
};

export default SearchMedia;