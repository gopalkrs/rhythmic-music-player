import React from 'react';

const Song = ({currentSong})=>{
    return(
        <div className='song-container'>
            <img src={currentSong.cover} alt='cover-song'/>
            <div className='song-deets'>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
            </div>
        </div>
    );
};

export default Song;