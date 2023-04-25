import axios from "axios";

const BASE_URL = "https://api.kinopoisk.dev/v1";
const HEADERS = {
  "x-api-key": "7V2EEJ6-HKB4MZR-GF4DPD2-CW2HZDR",
};

async function getMovies(limit = 100) {
  let result = [];
  try {
    result = await axios.get(`${BASE_URL}/movie?limit=${limit}`, {
      headers: HEADERS,
    });
  } catch (error) {
    console.log("getMovies: ", error);
  }
  return result;
}

async function getMoviesByName(name) {
  let result = [];
  try {
    result = await axios.get(`${BASE_URL}/movie?name=${name}&limit=100`, {
      headers: HEADERS,
    });
  } catch (error) {
    console.log("getMoviesByName: ", error);
  }
  return result;
}

export { getMovies, getMoviesByName };
