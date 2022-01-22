import React from 'react';
import IndividualSong from './IndividualSong';

const SongGallery = ({songs, setCurrentSong, isPlaying, audioRef, libraryStatus})=>{
    return(
        <div className={`gallery ${libraryStatus? "active-gallery" : ""} `}>
            <h2>Library</h2>
            <div className='song-gallery'>
                {songs.map((song)=>(
                    <IndividualSong 
                        song={song} 
                        setCurrentSong={setCurrentSong} 
                        songs={songs}
                        id={song.id}
                        key={song.id}
                        isPlaying={isPlaying}
                        audioRef={audioRef}
                    />
                ))}
            </div>
        </div>
    );
};

export default SongGallery;