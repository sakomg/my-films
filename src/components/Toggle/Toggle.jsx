import React from "react";
import styled from "styled-components";

const ToggleWrapper = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
`;

const ToggleButton = styled.div`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 10px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  ${ToggleInput}:checked + & {
    background-color: #2196f3;
  }

  ${ToggleInput}:checked + &:before {
    transform: translateX(26px);
  }
`;

const ToggleLabel = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  font-family: Helvetica;
`;

const Toggle = ({ label, checked, onChange }) => {
  return (
    <ToggleWrapper>
      <ToggleButton>
        <ToggleInput type="checkbox" checked={checked} onChange={onChange} />
        <ToggleSlider />
      </ToggleButton>
      <ToggleLabel>{label}</ToggleLabel>
    </ToggleWrapper>
  );
};

export default Toggle;
