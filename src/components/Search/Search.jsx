import "./Search.css";

export default function Search() {
  return (
    <>
      <div className="search-container">
        <input className="search-input" type="text" placeholder="Search..." />
        <button className="search-button">Go</button>
      </div>
    </>
  );
}
