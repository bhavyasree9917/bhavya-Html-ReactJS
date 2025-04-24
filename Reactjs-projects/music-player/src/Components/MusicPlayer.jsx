import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  play, pause, skip, shuffle, setVolume, toggleRepeatMode, setCurrentSong, addToPlaylist
} from "../Store/MusicPlayerSlice";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const audioRef = useRef(null);

  const {
    currentSong, isPlaying, volume, repeatMode, shuffleMode, totalDuration, playlist
  } = useSelector((state) => state.musicPlayer);

  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = volume / 100;

    if (isPlaying) {
      audioRef.current.play().catch((err) => {
        console.error("Playback error:", err);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentSong, volume]);

  const handleEnded = () => {
    if (repeatMode) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(skip());
    }
  };

  // Handle song click to set the current song
  const handleSongClick = (song) => {
    dispatch(setCurrentSong(song)); // Set the current song to the clicked song
    dispatch(play());  // Start playing the song
  };

  // Add a new song to the playlist
  const handleAddSong = () => {
    dispatch(addToPlaylist({
      title: 'New Song',
      artist: 'New Artist',
      src: 'path/to/song.mp3',
      albumCover: 'path/to/cover.jpg',
      duration: 200
    }));
  };

  return (
    <div>
      <h2>Now Playing: {currentSong ? `${currentSong.title} - ${currentSong.artist}` : "Nothing"}</h2>
      {currentSong?.albumCover && <img src={currentSong.albumCover} alt={currentSong.title} />}
      <p>Volume: {volume}</p>
      <p>Total Duration: {totalDuration} sec</p>
      <p>Repeat Mode: {repeatMode ? "On" : "Off"}</p>
      <p>Shuffle Mode: {shuffleMode ? "On" : "Off"}</p>

      <audio
        ref={audioRef}
        src={currentSong?.src}
        onEnded={handleEnded}
      />

      <button onClick={() => dispatch(isPlaying ? pause() : play())}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={() => dispatch(skip())}>Skip</button>
      <button onClick={() => dispatch(shuffle())}>Shuffle</button>
      <button onClick={() => dispatch(toggleRepeatMode())}>Toggle Repeat</button>

      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={(e) => dispatch(setVolume(Number(e.target.value)))}
      />
      <span>{volume}%</span>

      <h3>Playlist</h3>
      <ul>
        {playlist.map((song, i) => (
          <li key={i} onClick={() => handleSongClick(song)}>
            {song.title} - {song.artist} ({song.duration}s)
          </li>
        ))}
      </ul>

      <button onClick={handleAddSong}>Add New Song to Playlist</button>
    </div>
  );
};

export default MusicPlayer;
