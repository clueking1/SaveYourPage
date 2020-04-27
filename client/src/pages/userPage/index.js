import React, { useState, useEffect } from 'react';
import Navi from '../../component/Nav'
import DisplayCollection from '../../component/displayCollection'
import API from '../../utils/API'
import './style.css'

function Home() {

    const [res, setRes] = useState({})
    const [show, setShow] = useState(false)

    useEffect(() => {
        API.savedBooks()
        .then(res =>{
            setRes(res)
        })
        .then(() => {
            setShow(true)
        })
        
    }, [])

    return (
        <div>
            <div className="backSearch">
            <Navi />

            <div className='searchWrapper'>
                <h2 className="hTwo">Your Collection</h2>
                
            </div>
            </div>
            <div className="searchedWrapper">
                {show ? <DisplayCollection data={res}/> : <div>Hi</div>}
         
            </div>

        
        
            
        </div>    
    )
}

export default Home