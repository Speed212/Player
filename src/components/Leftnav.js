import React  from "react";
import './styles/leftnavCom.scss'
import LeftnavCom from "./LeftnavCom";



const Leftnav = ({arraySong, setIsPlaying, setCurrentSong,openlibrary}) =>{

    return(
        <div className={`library ${openlibrary ? 'library-show' : ''}`} >
            <h1>Library</h1>
            {arraySong.map(el=>{
                return (
                    <LeftnavCom el={el} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying} />

                )
            })}
        </div>
    )
}





export default Leftnav