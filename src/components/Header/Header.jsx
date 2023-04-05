import React, { useState } from "react";
import styled from "styled-components";
import Search from "../Search/Search";
import Toggle from "../Toggle/Toggle";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  height: 64px;
  padding: 0 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999; /* make sure the header is on top of other elements */

  @media (max-width: 767px) {
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 16px;
  }
`;

const Button = styled.button`
  border: 2px solid #007bff;
  border-radius: 20px;
  color: #007bff;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: absolute;
  right: 12px;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }

  @media (max-width: 767px) {
    position: static;
    margin-top: 12px;
  }
`;

const Header = ({ onSearch, onSearchMode }) => {
  const [isApiSearch, setIsApiSearch] = useState(false);

  const handleSearch = (searchTerm) => {
    onSearch(searchTerm);
  };

  const handleChangeMode = () => {
    setIsApiSearch(!isApiSearch);
    onSearchMode(!isApiSearch);
  };

  return (
    <HeaderContainer>
      <Search onSearch={handleSearch} />
      <Toggle
        label={isApiSearch ? "Поиск на Кинопоиске" : "Поиск локально"}
        checked={isApiSearch}
        onChange={handleChangeMode}
      />
      <Button>Добавить</Button>
    </HeaderContainer>
  );
};

export default Header;
