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
  margin-bottom: 20px;
`;

const FilmDesc = ({ film, expanded }) => {
  const { watchability, rating, description, countries } = film;
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
            <strong>Страна(ы) производства:</strong>{" "}
            {countries.map((country) => country.name).join(", ")}
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
