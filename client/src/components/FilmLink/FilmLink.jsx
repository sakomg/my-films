import styled from "styled-components";

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

const FilmLink = ({ index, link }) => {
  return (
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
  );
};

export default FilmLink;
