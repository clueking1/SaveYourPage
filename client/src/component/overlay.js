import React from 'react';
import API from '../utils/API'

const Overlay = (props) => {
    console.log(props.data)
    function closeNav() {
      document.getElementById("myNav").style.width = "0%";
    }

    function saveBook(data) {
  
      API.saveBook({
        bookId: data.id,
        title: data.title,
        author: data.author,
        snip: data.snip,
        link: data.link
      })
        .then(res => {
          console.log(res)
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
                        <a href="javascript:void(0)" onClick={() => saveBook(props.data)}>Save</a>
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
  
  export default Overlay;