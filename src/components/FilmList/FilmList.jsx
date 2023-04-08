import Film from "../Film/Film";
import NoResults from "../NoResult/NoResult";

const FilmList = ({ films, addFilm, removeFilm }) => {
  return (
    <>
      <div className="container">
        <main>
          {films.length ? (
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
          ) : (
            <NoResults />
          )}
        </main>
      </div>
    </>
  );
};

export default FilmList;
