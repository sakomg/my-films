import React, { useState } from "react";
import FilmDesc from "../FilmDesc/FilmDesc";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease-in-out;
  margin: 10px;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 767px) {
    margin-top: 110px;
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin: 10px 0;
  color: #333;
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

const ExpandButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
`;

const ButtonGroup = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
`;

const AddRemoveButton = styled.button`
  color: #fefefe;
  background-color: transparent;
  border: none;
  transition: all 0.3s ease;
  font-size: 4rem;
  cursor: pointer;

  &:hover {
    color: rgb(0, 123, 255);
  }
`;

const AddButton = styled(AddRemoveButton)``;

const RemoveButton = styled(AddRemoveButton)``;

const Film = ({ film, addFilm, removeFilm }) => {
  const [expanded, setExpanded] = useState(false);

  const {
    name,
    shortDescription,
    poster,
    year,
    rating,
    watchability,
    id,
    added,
  } = film;
  return (
    <CardContainer>
      <CardImage src={poster?.previewUrl} alt={name} />
      <ButtonGroup>
        <AddButton>
          {film.added ? (
            <i className="fa-fw far fa-eye-slash"></i>
          ) : (
            <i className="fa-fw far fa-eye" onClick={() => addFilm(film)}></i>
          )}
        </AddButton>

        <RemoveButton onClick={() => removeFilm(id)}>
          <i className="fa-fw fa fa-times"></i>
        </RemoveButton>
      </ButtonGroup>
      <CardTitle>{name}</CardTitle>
      <FilmDesc
        expanded={expanded}
        shortDescription={shortDescription}
        year={year}
        rating={rating}
        watchability={watchability}
      />
      <div style={{ textAlign: "right" }}>
        <ExpandButton onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Details" : "Show Details"}
        </ExpandButton>
      </div>
    </CardContainer>
  );
};

export default Film;
