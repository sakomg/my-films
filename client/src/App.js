import React, { useEffect, useState } from "react";
import _debounce from "lodash/debounce";
import FilmList from "./components/FilmList/FilmList";
import { getMoviesByName, getMovies } from "./kinopoisk-api/api";
import {
  getFilmsFromLocalStorage,
  setFilmsToLocalStorage,
  addFilmToLocalStorage,
  removeFilmFromStorage,
} from "./database/storage";
import Header from "./components/Header/Header";
import "./App.css";
import "./lib/css/all.min.css";

function App() {
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilterFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isApiSearch, setIsApiSearch] = useState(false);

  useEffect(() => {
    const storedFilms = getFilmsFromLocalStorage();
    console.log(storedFilms);
    setFilms(storedFilms);
  }, []);

  const handleSearch = _debounce(async (searchTerm) => {
    console.log("search", searchTerm);
    let filteredFilms = [];
    if (isApiSearch) {
      if (searchTerm.length > 2) {
        const result = await getMoviesByName(searchTerm);
        filteredFilms = result.data.docs;
        console.log(result.data);
      }
    } else {
      filteredFilms = films.filter((film) => {
        const name = film.name?.toLowerCase() || "";
        const description = film.description?.toLowerCase() || "";
        return name.includes(searchTerm) || description.includes(searchTerm);
      });
    }
    setSearchTerm(searchTerm);
    setFilterFilms(filteredFilms);
  }, 500);

  const handleChangeSearchMode = (isApiSearch) => {
    setIsApiSearch(isApiSearch);
    if (!isApiSearch) {
      const films = getFilmsFromLocalStorage();
      setFilms(films);
      setFilterFilms([]);
      setSearchTerm("");
    }
  };

  const addFilm = (film) => {
    film.added = true;
    const films = addFilmToLocalStorage(film);
    setFilms(films);
  };

  const removeFilm = (id) => {
    const films = removeFilmFromStorage(id);
    setFilms(films);
  };

  return (
    <>
      <Header
        onSearch={handleSearch}
        onSearchMode={handleChangeSearchMode}
        onAddFilm={addFilm}
      />
      <FilmList
        films={searchTerm.length ? filteredFilms : films}
        addFilm={addFilm}
        removeFilm={removeFilm}
      />
    </>
  );
}

export default App;
