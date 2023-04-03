fetch("https://github.com/sakomg/my-films/blob/main/films.json", {
  mode: "no-cors",
})
  .then((response) => response.json())
  .then((data) => {
    const films = data.films;

    const filmsList = document.getElementById("films");

    films.forEach((film) => {
      const filmItem = document.createElement("li");

      const title = document.createElement("h2");
      title.textContent = film.title;

      const year = document.createElement("p");
      year.textContent = `Year: ${film.year}`;

      const director = document.createElement("p");
      director.textContent = `Director: ${film.director}`;

      const genre = document.createElement("p");
      genre.textContent = `Genre: ${film.genre}`;

      const poster = document.createElement("img");
      poster.src = film.poster;
      poster.alt = film.title;

      filmItem.appendChild(title);
      filmItem.appendChild(year);
      filmItem.appendChild(director);
      filmItem.appendChild(genre);
      filmItem.appendChild(poster);

      filmsList.appendChild(filmItem);
    });
  });
