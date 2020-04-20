import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"



const searchMedia = () => {

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  return (
    <div className="nestedWrapper">
        
        <div className="image">
          <img src="https://via.placeholder.com/300" alt="img1"/>
        </div>
        <span onClick={openNav}>View More</span>

      <div id="myNav" className="overlay">
              <a href="javascript:void(0)" className="closebtn" onClick={closeNav} >&times;</a>
          <div class="overlay-content">
            <div className="overlaySearched">
              <div className="bookInfo">
                <h3>Harry Potter</h3>
                <p>The Stones Of Misery</p>
                <p>Author: <i>William</i></p>
              </div>
              <div className="buttonGroup">
                <a href='/'>View</a>
                <a href='/'>Save</a>
              </div>
          
              <div className="description">
                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
              </div>
            </div> 
          </div>
      </div>
    </div>
      
  );
};

export default searchMedia;