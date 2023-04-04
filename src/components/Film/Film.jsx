import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease-in-out;
  margin-bottom: 40px;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin: 10px 0;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #666;
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
`;

const CardLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const CardLink = styled.a`
  display: inline-block;
  padding: 5px 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border-radius: 5px;
  text-decoration: none;
  text-align: left;

  &:hover {
    background-color: #0069d9;
    cursor: pointer;
  }
`;

const Film = ({ film }) => {
  const { name, shortDescription, poster, year, rating, watchability } = film;
  return (
    <CardContainer>
      <CardImage src={poster.previewUrl} alt={name} />
      <CardTitle>{name}</CardTitle>
      <CardDescription>{shortDescription}</CardDescription>
      <span>
        <strong>Year:</strong> {year}
      </span>
      <span>
        <strong>Rating:</strong>
        <ul>
          <li>imdb: {rating.imdb}</li>
          <li>russian film critics: {rating.russianFilmCritics}</li>
          <li>kp: {rating.kp}</li>
        </ul>
      </span>
      <CardLinkContainer>
        {watchability.items != null
          ? watchability.items.map((link, index) => (
              <CardLink
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </CardLink>
            ))
          : ""}
      </CardLinkContainer>
    </CardContainer>
  );
};

export default Film;
