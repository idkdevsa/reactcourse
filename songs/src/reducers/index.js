import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Smells like teen spirit", duration: "4:03" },
    { title: "Freedom", duration: "5:45" },
    { title: "Milkshakes", duration: "2:56" },
    { title: "Monsters", duration: "3:34" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
