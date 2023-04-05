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

const FilmDesc = ({
  expanded,
  shortDescription,
  year,
  rating,
  watchability,
}) => {
  return (
    <>
      {!expanded ? (
        <CardDescription>
          {shortDescription && shortDescription.length
            ? shortDescription.substring(0, 30) + "..."
            : "none"}
        </CardDescription>
      ) : (
        <>
          <CardDescription title={shortDescription}>
            {shortDescription}
          </CardDescription>
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
