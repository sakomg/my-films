import styled from "styled-components";
import FilmLink from "../FilmLink/FilmLink";

const CardDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #666;
`;

const CardLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const combineDesc = (shortDesc, desc) => {};

const FilmDesc = ({ film, expanded }) => {
  const { year, watchability, rating, description } = film;
  // const desc = combineDesc(film.shortDescription, film.description);
  return (
    <>
      {!expanded ? (
        <CardDescription>
          {description && description.length
            ? description.substring(0, 30) + "..."
            : "..."}
        </CardDescription>
      ) : (
        <>
          <CardDescription title={description}>{description}</CardDescription>
          <span>
            <strong>Год:</strong> {year}
          </span>
          <span>
            <strong>Рейтинг:</strong>
            <ul>
              <li>IMDb: {rating.imdb}</li>
              <li>Кинопоиск: {rating.kp}</li>
            </ul>
          </span>
          <CardLinkContainer>
            {watchability.items != null
              ? watchability.items.map((link, index) => (
                  <FilmLink key={index} link={link} index={index} />
                ))
              : ""}
          </CardLinkContainer>
        </>
      )}
    </>
  );
};

export default FilmDesc;
