import { createSlice } from '@reduxjs/toolkit';

// Initial songs in the playlist (You can customize this with real data)
const exampleSongs = [
 
    { id: 1, title: 'Song 1', artist: 'Artist 1', duration: 180, url: '/songs/song1.mp3' },

  
  ,
  { id: 2, title: 'Song 2', artist: 'Artist 2', duration: 240 },
  { id: 3, title: 'Song 3', artist: 'Artist 3', duration: 200 },
  { id: 4, title: 'Song 4', artist: 'Artist 4', duration: 220 }
];

const initialState = {
  currentSong: null,
  isPlaying: false,
  volume: 50,
  repeatMode: false,
  shuffleMode: false,
  totalDuration: 0,
  playlist: exampleSongs
};
const musicPlayerSlice = createSlice({
  name: 'musicPlayer',
  initialState,
  reducers: {
    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
    skip: (state) => {
    
    },
    shuffle: (state) => {
      state.shuffleMode = !state.shuffleMode;
      
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
    toggleRepeatMode: (state) => {
      state.repeatMode = !state.repeatMode;
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    addToPlaylist: (state, action) => {
      state.playlist.push(action.payload);
    },
    playSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    }
  }
});


export const {
  play,
  pause,
  skip,
  shuffle,
  setVolume,
  toggleRepeatMode,
  setCurrentSong,
  addToPlaylist,
  playSong
} = musicPlayerSlice.actions;

export default musicPlayerSlice.reducer;
