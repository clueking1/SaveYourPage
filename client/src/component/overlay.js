import React, {useEffect} from 'react';
import API from '../utils/API'
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3001');

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
        link: data.link,
        img: data.img
      })
        .then(res => {
          
        })
  }

        useEffect(() => {
          socket.on('messages', function(data) {
              alert(data);
      });
      })

  
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