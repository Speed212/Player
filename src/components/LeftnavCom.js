import React from 'react'
import '../components/styles/leftnav.scss'
const LeftnavCom = ({el, setCurrentSong}) =>{
    function changeSong(){
        setCurrentSong(el)
    }
    return(
        <div className='Bar' onClick={changeSong}>
            <div>
                <img src={el.cover} className='img' />
            </div>
            <div>
                <h3>{el.name}</h3>
                <p>{el.artist}</p>
            </div>
        </div>
    )
}

export default LeftnavCom