import React, { useState } from "react";
import styled from "styled-components";
import Search from "../Search/Search";
import Toggle from "../Toggle/Toggle";
import FilmModal from "../FilmModal/FilmModal";

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

const ButtonContainer = styled.div`
  display: flex;

  @media (max-width: 767px) {
    margin-top: 12px;
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
  top: 12px;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }

  @media (max-width: 767px) {
    position: static;
  }
`;

const Header = ({ onSearch, onSearchMode, onAddFilm }) => {
  const [isApiSearch, setIsApiSearch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSaveModal = (film) => {
    onAddFilm(film);
  };

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
      <ButtonContainer>
        <Toggle
          label={
            isApiSearch ? (
              <span>
                Кинопоиск <i className="fas fa-server"></i>
              </span>
            ) : (
              <span>
                Локально <i className="fas fa-laptop-house"></i>
              </span>
            )
          }
          checked={isApiSearch}
          onChange={handleChangeMode}
        />
        <Button onClick={handleOpenModal}>Добавить</Button>
      </ButtonContainer>
      {isModalOpen && (
        <FilmModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveModal}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
