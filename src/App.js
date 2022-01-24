import React, {useRef, useState} from 'react';
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
//importing backend data
import musicData from './musicdata';
import SongGallery from './components/SongGallery';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  const [songs, setSongs] = useState(musicData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);

  //audio ref state lifting done from player
  const audioRef = useRef(null);

  const [songInfo, setSongInfo]= useState({
    durationTime : 0,
    currentTime : 0
  });

  const endSongHandler=()=>{
    const index = songs.findIndex((song)=>song.id === currentSong.id);
    setCurrentSong(songs[((index + 1) % songs.length)]);
  }

  const timeUpdateHandler =(e)=>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime : current, durationTime : duration});
  }

  return (
    <div className ={`App ${libraryStatus ? "gallery-is-active" : ""}`}>
      <Navigation libraryStatus={libraryStatus} setLibraryStatus ={setLibraryStatus}/>
      <Song currentSong = {currentSong}/>
      <Player 
        isPlaying = {isPlaying} 
        currentSong = {currentSong}
        setIsPlaying = {setIsPlaying}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <SongGallery
        songs={songs} 
        setCurrentSong={setCurrentSong} 
        isPlaying={isPlaying} 
        audioRef={audioRef}
        libraryStatus={libraryStatus}
      />
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef} 
        src={currentSong.audio}
        onEnded={endSongHandler} >
      </audio>
      <Footer />
    </div>

  )
}

export default App;
