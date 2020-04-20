import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import API from '../utils/API'
import { CardImgOverlay } from 'reactstrap';



const searchMedia = (props) => {
  console.log(props.data.items)

  function openNav(id) {
    document.getElementById("myNav").style.width = "100%";
   overlay(id)
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function overlay(id) {
    API.overlayBook(id)
      .then(res => {
        console.log(res)
      })
  }

  return (
      <div>
        {props.data.items.map(t => (
          
          <div className="nestedWrapper" key={t.id}>      
                <div className="image">
                <img src={t.volumeInfo.imageLinks.thumbnail} alt="img1"/>
              </div>
              <span onClick={() => openNav(t.id) }>View More</span>
          </div>
         ))} 
            <div id="myNav" className="overlay">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav} >&times;</a>
                <div className="overlay-content">
                  <div className="overlaySearched">
                    <div className="bookInfo">
                      <h3></h3>
                      {/* <p>{item.volumeInfo.authors[0]}</p> */}
                      <p>Author: <i></i></p>
                    </div>
                    <div className="buttonGroup">
                      <a href='/'>View</a>
                      <a href='/'>Save</a>
                    </div>
                
                    <div className="description">
                      <p></p>
                    </div>
                  </div> 
                </div>
            </div>
          
      </div>
       
    
      
  );
};

export default searchMedia;