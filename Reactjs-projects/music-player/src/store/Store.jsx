import { configureStore } from "@reduxjs/toolkit";
import musicPlayerReducer from "./MusicPlayerSlice";

const store = configureStore({
  reducer: {
    musicPlayer: musicPlayerReducer,
  },
});

export default store;
