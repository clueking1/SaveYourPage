import React, { useState, useEffect } from 'react';
import Navi from '../../component/Nav'
import DisplayCollection from '../../component/displayCollection'
import API from '../../utils/API'
import './style.css'

function Home() {

    const [search, setSearch] = useState('')
    const [res, setRes] = useState([])
    const [show, setShow] = useState(false)

    useEffect(() => {
        API.savedBooks()
        .then(async res =>{
            await res.map(t => {
                API.searchBooks(t.bookId)
                .then(res => {
                    //console.log(res)
                    setRes(res.data)
                })
            })
            setShow(true)
        })
        
    }, [])

   

  


    return (
        <div>
            <Navi />

            <div className='searchWrapper'>
                <h2 className="hTwo">Your Collection</h2>
                
            </div>

            <div className="searchedWrapper">
                {show ? <DisplayCollection data={res}/> : <div>Hi</div>}
         
            </div>
            
        </div>    
    )
}

export default Home