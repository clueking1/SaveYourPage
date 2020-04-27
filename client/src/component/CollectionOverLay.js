import React from 'react';
import API from '../utils/API'

const CollectionOverlay = (props) => {

    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }

    function removeBook(data) {
        console.log(data)
      API.deleteBook(data)
        .then(res => {
          closeNav()
        })
  }
  
    return (
        <div>

              <div id="myNav" className="overlay">
                      <a href="javascript:void(0)" className="closebtn" onClick={closeNav} >&times;</a>
                  <div className="overlay-content">
                    <div className="overlaySearched">
                      <div className="bookInfo">
                        <h3>{props.data.title}</h3>
                       
                        <p>Author: <i>{props.data.author}</i></p>
                      </div>
                      <div className="buttonGroup">
                        <a href={props.data.link} target="_blank">View</a>
                        <a href="javascript:void(0)" onClick={() => removeBook(props.data._id)}>Remove</a>
                      </div>
                  
                      <div className="description">
                        <p>{props.data.snip}</p>
                      </div>
                    </div> 
                  </div>
              </div>
            
        </div>
         
      
        
    );
  };
  
  export default CollectionOverlay;