import React from 'react';

const IndividualSong = ({song, setCurrentSong, songs, id, key, isPlaying, audioRef})=>{
    const selectSongHandler=()=>{
        setCurrentSong(song);
        if(isPlaying){
            const playingpromise = audioRef.current.play();
            if(playingpromise !== undefined) {
                playingpromise.then((audio)=>{
                    audioRef.current.play();
                });
            }
        }
    }

    return(
        <div onClick={selectSongHandler} className='individual-songs-div'>
            <img src={song.cover} alt='cover-song'/>
            <div className='song-description'>
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default IndividualSong;