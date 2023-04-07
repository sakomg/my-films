import Film from "../Film/Film";

const FilmList = ({ films, addFilm, removeFilm }) => {
  return (
    <>
      <div className="container">
        <main>
          <div className="film-list">
            {films.map((film) => (
              <Film
                key={film.id}
                film={film}
                addFilm={addFilm}
                removeFilm={removeFilm}
              />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default FilmList;
