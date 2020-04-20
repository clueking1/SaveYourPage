import React from 'react';
import Navi from '../../component/Nav'
import Search from '../../component/SearchInput'
import './style.css'

function Home() {
    return (
        <div>
            <Navi />

            <div className='searchWrapper'>
                <h2>Find Your Book</h2>
                <p>Search for a book and save it to your library!</p>
                <Search />
            </div>
            
        </div>    
    )
}

export default Home