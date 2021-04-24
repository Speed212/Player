import React,{useState, useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {faPause} from "@fortawesome/free-solid-svg-icons";


const Player = ({currentSong, isPlaying, setIsPlaying,arraySong , setCurrentSong}) => {
    const audio = useRef(null)
    const [time, setTime] = useState({
        current: 0,
        duration: 0
    })
    function skipSong(skip) {
        let indexsong = arraySong.findIndex( i => i.id === currentSong.id )
        if(skip == 'next'){
            setCurrentSong(arraySong[(indexsong + 1) % arraySong.length])
        }else if(skip == 'prev'){
            setCurrentSong(arraySong[(indexsong - 1) % arraySong.length]);
        }
    }

    function handlerClick(){
        setIsPlaying(!isPlaying)
        if(isPlaying === true){
            audio.current.pause()
        }else{
            audio.current.play()
        }
    }
    function handlerTime(e){
        let currentTime = e.target.currentTime
        let durationTime = e.target.duration
        setTime({...time,current: currentTime, duration: durationTime})
    }
    function dragHandler(e){
        console.log(e.target.value)
        audio.current.currentTime = e.target.value
    }
    function secondsToTime(e){
        var h = Math.floor(e / 3600).toString().padStart(2,'0'),
            m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
            s = Math.floor(e % 60).toString().padStart(2,'0');

        return  m + ':' + s;
    }
    let currentDur = Math.ceil(time.current)
    let durationDur = Math.ceil(time.duration)
    return(
        <div className='playerContainer'>
            <div className='playerFoot'>
                <p>{secondsToTime(currentDur)}</p>
                <input onChange={dragHandler}
                    className='range'
                       type="range"
                       value={time.current}
                min={0}
                max={time.duration}/>
                <p>{secondsToTime(durationDur)}</p>
            </div>
            <div className='playerArrows'>
                <FontAwesomeIcon onClick={()=> skipSong('prev')} className='icon1 icon' size='2x' icon={faAngleLeft} />
                <FontAwesomeIcon onClick = {handlerClick} className='icon2 icon' size='3x' icon={isPlaying ? faPause : faPlay}  />
                <FontAwesomeIcon onClick={()=> skipSong('next')} className='icon3 icon' size='2x' icon={faAngleRight} />
            </div>
            <audio onLoadedData={handlerTime} onTimeUpdate={handlerTime} ref={audio} src={currentSong.audio}></audio>

        </div>
    )
}

export default Player
