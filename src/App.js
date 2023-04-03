import React, { useEffect, useState } from "react";
import filmsData from "./films.json";
import "./App.css";
import Search from "./components/Search/Search";
import Film from "./components/Film/Film";
import axios from "axios";

async function getFilms() {
  const result = await axios.get(
    "https://api.kinopoisk.dev/v1/movie?limit=25",
    {
      headers: {
        ["x-api-key"]: "7V2EEJ6-HKB4MZR-GF4DPD2-CW2HZDR",
      },
    }
  );
  return result;
}

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getFilms()
      .then((result) => {
        console.log(result);
        setFilms(result.data.docs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <Search />
      </header>
      <main>
        <div className="film-list">
          {films.map((film) => (
            <Film key={film.id} film={film} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
