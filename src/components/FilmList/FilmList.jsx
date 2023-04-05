import Film from "../Film/Film";

const FilmList = ({ films }) => {
  return (
    <>
      <div className="container">
        <main>
          <div className="film-list">
            {films.map((film) => (
              <Film key={film.id} film={film} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default FilmList;
