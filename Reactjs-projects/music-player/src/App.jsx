import React from "react";
import { Provider } from "react-redux";
import store from "./store/Store";  
import MusicPlayer from "./Components/MusicPlayer"; 

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>🎵 My Music Player</h1>
        <MusicPlayer />
      </div>
    </Provider>
  );
};

export default App;
