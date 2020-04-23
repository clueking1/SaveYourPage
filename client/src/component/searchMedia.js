import React, { useState } from 'react';
import API from '../utils/API'
import Overlay from './overlay'

const SearchMedia = (props) => {
  const [over, setOver] = useState({
    id: '',
    title: '',
    author: '',
    snip: '',
    link: ''
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
          link: res.data.volumeInfo.previewLink,
          img: res.data.volumeInfo.imageLinks.thumbnail
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
        {props.data.items.map(t => (
          
          <div className="nestedWrapper" key={t.id}>      
                <div className="image">
                <img src={t.volumeInfo.imageLinks.thumbnail} alt="img1"/>
              </div>
              <div className="viewDiv">
              <span onClick={() => overlay(t.id) } className="viewMore">View More</span>
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