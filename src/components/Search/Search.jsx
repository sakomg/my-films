import { useState } from "react";
import { FaSearch, FaSpinner } from "react-icons/fa";
import styled from "styled-components";

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 400px;
  padding: 10px 32px 10px 40px;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.3s ease;
  color: #007bff;

  &:hover {
    color: #333;
  }
`;

const SpinnerIcon = styled(FaSpinner)`
  position: absolute;
  font-size: 20px;
  left: 440px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSearch(event) {
    setQuery(event.target.value);
    setLoading(true);
    setTimeout(() => {
      onSearch(event.target.value);
      setLoading(false);
    }, 100);
  }

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Поиск..."
        value={query}
        onChange={handleSearch}
      />
      {loading && <SpinnerIcon />}
      {!loading && <SearchIcon onClick={() => onSearch(query)} />}
    </SearchContainer>
  );
}

export default Search;
