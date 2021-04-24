import React from 'react'

const Song = ({currentSong,setOpenlibrary,openlibrary}) =>{
    function openLibrary(){
        setOpenlibrary(!openlibrary)
    }
    return(
        <div>
            <div className='songContainer'>
                <div className='songNavbar'>
                    <p className='navbar-p'>Waves</p>
                    <button onClick={openLibrary}>Library  <i className="fas fa-music"></i></button>
                </div>
                <img className='imgPrime' src={currentSong.cover} alt=""/>
                <h2>{currentSong.name}</h2>
                <h3>{currentSong.artist}</h3>
            </div>
        </div>
    )
}

export  default Song