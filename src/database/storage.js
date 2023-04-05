const LOCAL_STORAGE_KEY = "films";

export function getFilmsFromLocalStorage() {
  const storedFilms = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedFilms ? JSON.parse(storedFilms) : [];
}

export function setFilmsToLocalStorage(films) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(films));
}

export function removeFilmFromStorage(id) {
  const films = JSON.parse(localStorage.getItem("films")) || [];
  const updatedFilms = films.filter((film) => film.id !== id);
  localStorage.setItem("films", JSON.stringify(updatedFilms));
}
