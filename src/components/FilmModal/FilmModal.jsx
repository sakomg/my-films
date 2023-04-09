import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Dialog, Transition } from "@headlessui/react";
import "./FilmModal.css";

const ModalOverlay = styled.div`
  font-family: Helvetica;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
`;

const ModalWrapper = styled(Dialog.Overlay)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ModalContent = styled(Dialog.Panel)`
  background-color: white;
  padding: 2rem;
  position: relative;
  border-radius: 0.25rem;
  display: flex;
  flex-flow: column;
`;

const ModalHeader = styled(Dialog.Title)`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const StyledTextArea = styled.textarea`
  font-family: Helvetica;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: blue;
    box-shadow: 0 0 3px rgba(0, 0, 255, 0.4);
  }
`;

const Button = styled.button`
  border: 2px solid rgb(0, 123, 255);
  border-radius: 20px;
  color: rgb(0, 123, 255);
  font-weight: bold;
  width: 115px;
  left: 50%;
  position: relative;
  background-color: transparent;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  margin-top: 15px;
  transform: translateX(-50%);

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }
`;

const FilmModal = ({ isOpen, onClose, onSave }) => {
  const dummyFilm = {
    rating: {
      kp: 0,
      imdb: 0,
      filmCritics: 0,
      russianFilmCritics: 0,
      await: 0,
    },
    movieLength: 0,
    id: 0,
    type: "movie",
    name: "",
    description: "",
    year: 2000,
    poster: {
      url: "",
      previewUrl: "",
    },
    genres: [],
    countries: [],
    alternativeName: "",
    enName: null,
    names: [],
    shortDescription: "",
    logo: {
      url: "",
    },
    watchability: {
      items: [],
    },
  };

  const [filmData, setFilmData] = useState(dummyFilm);

  const handleChange = (e) => {
    setFilmData({
      ...filmData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    filmData.id = uuidv4();
    console.log(filmData);
    onSave(filmData);
    onClose();
  };

  return (
    <Transition appear show={isOpen}>
      <Dialog onClose={onClose}>
        <ModalOverlay>
          <ModalWrapper>
            <form onSubmit={handleSubmit} className="input-group">
              <ModalContent>
                <ModalCloseButton type="button" onClick={onClose}>
                  <span>
                    <i
                      className="fas fa-window-close fa-2x"
                      aria-hidden="true"
                    ></i>
                  </span>
                </ModalCloseButton>
                <ModalHeader>Добавить фильм</ModalHeader>
                <div className="input">
                  {/* <label htmlFor="title">Название:</label> */}
                  <StyledInput
                    type="text"
                    name="name"
                    placeholder="Название"
                    value={filmData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  {/* <label htmlFor="url">Превью URL:</label> */}
                  <StyledInput
                    type="url"
                    name="poster.previewUrl"
                    placeholder="https://www.preview-image.com"
                    pattern="https://.*"
                    required
                    value={filmData.poster?.previewUrl}
                    onChange={(e) => {
                      filmData.poster.previewUrl = e.target.value;
                      setFilmData({ ...filmData });
                    }}
                  />
                </div>
                <div className="input">
                  {/* <label htmlFor="url">Год:</label> */}
                  <StyledInput
                    type="number"
                    name="year"
                    max={3000}
                    min={1000}
                    step={1}
                    placeholder="Год выпуска"
                    value={filmData.year}
                    onChange={handleChange}
                  />
                </div>
                <div className="input">
                  <StyledTextArea rows="4" cols="50" placeholder="Описание" />
                </div>
                <Button type="submit">Сохранить</Button>
              </ModalContent>
            </form>
          </ModalWrapper>
        </ModalOverlay>
      </Dialog>
    </Transition>
  );
};

export default FilmModal;
