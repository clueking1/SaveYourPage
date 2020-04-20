import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"



const searchMedia = (props) => {
  console.log(props.data.items)

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  return (
      <div>
        {props.data.items.map(t => (
          
          <div className="nestedWrapper">      
                <div className="image">
                <img src={t.volumeInfo.imageLinks.thumbnail} alt="img1"/>
              </div>
              <span onClick={openNav}>View More</span>
      
            <div id="myNav" className="overlay">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav} >&times;</a>
                <div className="overlay-content">
                  <div className="overlaySearched">
                    <div className="bookInfo">
                      <h3>{t.volumeInfo.title}</h3>
                      {/* <p>{item.volumeInfo.authors[0]}</p> */}
                      <p>Author: <i>{t.volumeInfo.authors[0]}</i></p>
                    </div>
                    <div className="buttonGroup">
                      <a href='/'>View</a>
                      <a href='/'>Save</a>
                    </div>
                
                    <div className="description">
                      <p>{t.searchInfo.textSnippet}</p>
                    </div>
                  </div> 
                </div>
            </div>
          </div>
        ))}
      </div>
       
    
      
  );
};

export default searchMedia;