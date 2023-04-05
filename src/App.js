import React, { useEffect, useState } from "react";
import _debounce from "lodash/debounce";
import filmsData from "./films.json";
import FilmList from "./components/FilmList/FilmList";
import { getMoviesByName, getMovies } from "./kinopoisk-api/api";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  const [films, setFilms] = useState([]);
  const [filteredFilms, setFilterFilms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isApiSearch, setIsApiSearch] = useState(false);

  useEffect(() => {
    console.log(filmsData);
    setFilms(filmsData);
  }, []);

  const handleSearch = _debounce(async (searchTerm) => {
    let filteredFilms = [];
    if (isApiSearch) {
      if (searchTerm.length > 2) {
        const result = await getMoviesByName(searchTerm);
        filteredFilms = result.data.docs;
        console.log(result.data);
      }
    } else {
      filteredFilms = films.filter((film) => {
        const name = film.name.toLowerCase();
        const description = film.description.toLowerCase();
        return name.includes(searchTerm) || description.includes(searchTerm);
      });
    }
    setSearchTerm(searchTerm);
    setFilterFilms(filteredFilms);
  }, 500);

  const handleChangeSearchMode = (isApiSearch) => {
    setIsApiSearch(isApiSearch);
  };

  return (
    <>
      <Header onSearch={handleSearch} onSearchMode={handleChangeSearchMode} />
      <FilmList films={searchTerm.length ? filteredFilms : films} />
    </>
  );
}

export default App;
