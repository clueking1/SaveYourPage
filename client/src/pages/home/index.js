import React, { useState, useEffect } from 'react';
import Navi from '../../component/Nav'
import SearchMedia from '../../component/searchMedia'
import API from '../../utils/API'
import SavedAlert from '../../component/savedAlert'
import DangerAlert from '../../component/dangerAlert'
import './style.css'
import openSocket from 'socket.io-client';

const socket = openSocket('https://saveyourpage.herokuapp.com/');


function Home(props) {

    const [search, setSearch] = useState('')
    const [res, setRes] = useState()
    const [show, setShow] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [save, setSave] = useState(false)
    

    function handleSubmit(e) {
        e.preventDefault()
        
        API.searchBooks(search)
        .then(res => {
            console.log(res)
            if (res.data.items[0].volumeInfo.title === null) {
                setShowAlert(true)
                return
            } else if (res.data.items[0].volumeInfo.authors[0] === null) {
                setShowAlert(true)
            } else if (res.data.items[0].volumeInfo.description === null) {
                setShowAlert(true)
            } else if (res.data.items[0].volumeInfo.previewLink === null) {
                setShowAlert(true)
            } else if (res.data.items[0].volumeInfo.imageLinks.thumbnail === null) {
                setShowAlert(true)
            } else {
                setRes(res.data)
                setShowAlert(false)
            }
        })
        .then(() => {
            setShow(true)
        })
        .catch(() => {
            setShowAlert(true)
        })

    }

    

    function test() {
        socket.emit('Clicked', 'Book')
    }

    useEffect(() => {
        socket.on('saved', function() {
            
            console.log('save')
            setSave(true)
        })
    },[])

   function deleteAlert() {
        setSave(false)
    }
    function deleteDanAlert() {
        setShowAlert(false)
    }
    return (
        <div className="searchPage">
            <div className="backSearch">
                <Navi />

                <div className='searchWrapper'>
                    
                    <h2 className="hTwo">Save Your Page</h2>
                    <p>Search for a book and save it to your library!</p>
                    <form className="form-group mt-5" onSubmit={handleSubmit}>
                        <input
                        className="form-control"
                        onChange={e => setSearch(e.target.value)}
                    
                        />
                        <button type="submit" className="searchBtn">
                        Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="alertDiv">
                {save ? 
                
                <SavedAlert delAlert={deleteAlert}/> : undefined}
            </div>
            <div className="alertDiv">
                {showAlert ? 
                
                <DangerAlert delAlert={deleteDanAlert}/> : undefined}
            </div>
          
            <div className="searchedWrapper">
                {show ? <SearchMedia data={res} test={test} /> : undefined}
            </div>
            
        </div>    
    )
}

export default Home