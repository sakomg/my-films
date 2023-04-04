import { useState } from "react";
import "./Search.css";

export default function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-box">
        <input
          placeholder="Поиск..."
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="search-button" type="submit">
          Поиск
        </button>
      </div>
    </form>
  );
}
