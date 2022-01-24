import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faPause,faBackward, faForward,faRedo } from '@fortawesome/free-solid-svg-icons'

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, songInfo, setSongInfo, songs, setCurrentSong, loop, setLoop})=>{

    

    useEffect(()=>{
        if(isPlaying){
            const playingpromise = audioRef.current.play();
            if(playingpromise !== undefined) {
                playingpromise.then((audio)=>{
                    audioRef.current.play();
                });
            }
        }
    }, [currentSong]);

    const playSongHandler = ()=>{
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const getTimeFormatted = (time)=>{
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
    }

    const dragHandler = (e)=>{
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime : e.target.value})
    }

    const replayHandler = ()=>{
        setLoop(!loop);
    }

    const skipTrackHandler = (direction)=>{
        const index = songs.findIndex((song)=>song.id === currentSong.id);
        if(direction==='forward'){
            setCurrentSong(songs[((index + 1) % songs.length)]);
        }
        if(direction === 'backward'){
            setCurrentSong(songs[((index - 1) + songs.length) % songs.length]);
        }
    }

    return(
        <div className='player'>
            <div className='time-controls'>
                <p>{getTimeFormatted(songInfo.currentTime)}</p>
                <input 
                    type="range" 
                    min={0} 
                    max={songInfo.durationTime} 
                    value={songInfo.currentTime}
                    onChange={dragHandler}
                />
                <p>{songInfo.durationTime? getTimeFormatted(songInfo.durationTime) : "0:00"}</p>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon className = 'song-play-pause' icon={faBackward} size='2x' onClick={()=>skipTrackHandler('backward')}/>
                <FontAwesomeIcon className = 'song-play-pause' icon={isPlaying? faPause : faPlay} onClick={playSongHandler} size='2x'/>
                <FontAwesomeIcon className = 'song-play-pause' icon={faForward} size='2x' onClick={()=>skipTrackHandler('forward')}/>
            </div>
            <FontAwesomeIcon className = {`song-play-pause ${loop? "loop-active" : ""}`} icon={faRedo} size='2x' onClick={replayHandler}/>
            
        </div>
    );
};

export default Player;