import React, { useState } from 'react';
import API from '../utils/API'
import Overlay from './overlay'

const SearchMedia = (props) => {
    console.log(props)
  const [over, setOver] = useState({
    id: '',
    title: '',
    author: '',
    snip: ''
  })
  const [show, setShow] = useState(false)

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function overlay(id) {
    API.overlayBook(id)
      .then(async res => {
        await setOver({
          id: res.data.id,
          title: res.data.volumeInfo.title,
          author: res.data.volumeInfo.authors[0],
          snip: res.data.volumeInfo.description,
          link: res.data.volumeInfo.previewLink
        })
      })
      .then(() => {
        console.log(over)
        setShow(true)
        openNav()

      })
}

  return (
      <div>
        
          {props.data.map(t => (
          
          <div className="nestedWrapper" key={t.bookId}>      
                <div className="image">
                <img src={t.img} alt="img1"/>
              </div>
              <div className="viewDiv">
              <span onClick={() => overlay(t.bookId) } className="viewMore">View More</span>
              </div>
          </div>
         ))} 
          
     
       <div>
            {show ? <Overlay data={over} /> : <div></div>}
       </div>   
      </div>
       
    
      
  );
};

export default SearchMedia;