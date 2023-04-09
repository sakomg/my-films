import React, { useState } from "react";
import FilmDesc from "../FilmDesc/FilmDesc";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
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
    width: 300px;
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

  @media (max-width: 767px) {
    height: 350px;
  }
`;

const ExpandButtonContainer = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

const ExpandButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 16px;
`;

const ButtonGroup = styled.div`
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  flex-direction: column;
  align-items: center;
`;

const AddRemoveButton = styled.button`
  color: #fefefe;
  background-color: transparent;
  border: none;
  transition: all 0.3s ease;
  font-size: 2.5rem;
  cursor: pointer;

  &:hover {
    color: rgb(0, 123, 255);
  }
`;

const AddButton = styled(AddRemoveButton)``;

const RemoveButton = styled(AddRemoveButton)``;

const Film = ({ film, addFilm, removeFilm }) => {
  const [expanded, setExpanded] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setButtonVisible(true)}
      onMouseLeave={() => setButtonVisible(false)}
    >
      <CardImage src={film.poster?.previewUrl} alt={film.name} />
      <ButtonGroup style={{ display: buttonVisible ? "block" : "none" }}>
        <AddButton>
          {film.added ? (
            <i className="fa-fw far fa-eye-slash"></i>
          ) : (
            <i className="fa-fw far fa-eye" onClick={() => addFilm(film)}></i>
          )}
        </AddButton>

        <RemoveButton onClick={() => removeFilm(film.id)}>
          <i className="fa-fw fa fa-times"></i>
        </RemoveButton>
      </ButtonGroup>
      <CardTitle>
        {film.name} ({film.year})
      </CardTitle>
      <FilmDesc film={film} expanded={expanded} />
      <ExpandButtonContainer>
        <ExpandButton onClick={() => setExpanded(!expanded)}>
          {expanded ? "Скрыть детали" : "Показать детали"}
        </ExpandButton>
      </ExpandButtonContainer>
    </CardContainer>
  );
};

export default Film;
