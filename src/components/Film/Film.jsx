import React, { useState } from "react";
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
  margin-bottom: 20px;

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

const ExpandButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
`;

const Film = ({ film }) => {
  const [expanded, setExpanded] = useState(false);

  const { name, shortDescription, poster, year, rating, watchability } = film;
  return (
    <CardContainer>
      <CardImage src={poster.previewUrl} alt={name} />
      <CardTitle>{name}</CardTitle>
      {!expanded ? (
        <CardDescription>
          {shortDescription?.substring(0, 30) + "..."}
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
                  <CardLink
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                    <img
                      src={link.logo.url}
                      alt={link.name}
                      style={{ margin: "-1px 0px -5px 5px" }}
                      width={20}
                      height={20}
                    />
                  </CardLink>
                ))
              : ""}
          </CardLinkContainer>
        </>
      )}
      <div style={{ textAlign: "right" }}>
        <ExpandButton onClick={() => setExpanded(!expanded)}>
          {expanded ? "Hide Details" : "Show Details"}
        </ExpandButton>
      </div>
    </CardContainer>
  );
};

export default Film;
