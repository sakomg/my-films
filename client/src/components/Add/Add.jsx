import React, { useState } from "react";
import axios from "axios";
import Film from "../Film/Film";

async function searchFilm(searchTerm) {
  const result = await axios.get(
    `https://api.kinopoisk.dev/v1/keyword?title=${searchTerm}`,
    {
      headers: {
        "x-api-key": "7V2EEJ6-HKB4MZR-GF4DPD2-CW2HZDR",
      },
    }
  );
  return result;
}

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const changeHandler = (e) => {
    e.preventDefault();

    let keyword = e.target.value;

    setQuery(keyword);

    if (keyword.length > 2) {
      searchFilm(keyword).then((data) => {
        console.log("search", data);
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
    }
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={changeHandler}
              placeholder="Search For Movie.."
            />
          </div>

          {results && (
            <ul className="results">
              {results.map((movie, index) => (
                <li key={index}>
                  <Film film={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
