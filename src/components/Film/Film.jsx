import "./Film.css";

export default function Film(props) {
  const film = props.film;
  return (
    <div className="film-card" key={film.id}>
      <img src={film.poster.previewUrl} alt={film.title} />
      <div className="film-card-info">
        <h2 className="film-card-title">{film.title}</h2>
        <p className="film-card-year">{film.year}</p>
        <p className="film-card-description">{film.shortDescription}</p>
      </div>
    </div>
  );
}
