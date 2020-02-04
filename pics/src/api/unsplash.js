import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b4d20d088450ccefc46d2a6e24c4ee7e9af3e1fb4aaf069346aafc7a31c46e34"
  }
});
