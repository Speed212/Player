import React,{useState} from 'react'
import './components/styles/app.scss'
import Player from "./components/Player";
import Song from './components/Song'
import Leftnav from './components/Leftnav'
import Data from './Data'
import LeftnavCom from "./components/LeftnavCom";
function App() {
    const [arraySong, setArraySong] = useState(Data)
    const [currentSong, setCurrentSong] = useState(arraySong[0])
    const [isPlaying , setIsPlaying] = useState(false)
    const [openlibrary, setOpenlibrary] = useState(false)
  return (

    <div>
        <Leftnav arraySong={arraySong}  openlibrary={openlibrary} setCurrentSong={setCurrentSong} setIsPlaying={setIsPlaying}/>
      <Song
          openlibrary={openlibrary}
          currentSong = {currentSong}
          setOpenlibrary={setOpenlibrary}
      />
      <Player
          currentSong = {currentSong}
          setCurrentSong={setCurrentSong}
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      arraySong = {arraySong}
      currentSong={currentSong}
                />

    </div>
  );
}

export default App;
