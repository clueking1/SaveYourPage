import React, { useState } from 'react';
import Navi from '../../component/Nav'
import SearchMedia from '../../component/searchMedia'
import API from '../../utils/API'
import './style.css'

function Home() {

    const [search, setSearch] = useState('')
    const [res, setRes] = useState()
    const [show, setShow] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        
        API.searchBooks(search)
        .then(res => {
            setRes(res.data)
        })
        .then(() => {
            setShow(true)
        })
        
    }


    return (
        <div>
            <Navi />

            <div className='searchWrapper'>
                <h2>Find Your Book</h2>
                <p>Search for a book and save it to your library!</p>
                <form className="form-group mt-5" onSubmit={handleSubmit}>
                    <input
                    className="form-control"
                    onChange={e => setSearch(e.target.value)}
                   
                    />
                    <button type="submit">
                    Search
                    </button>
                </form>
            </div>

            <div className="searchedWrapper">
                {show ? <SearchMedia data={res}/> : <div>Hi</div>}
         
            </div>
            
        </div>    
    )
}

export default Home