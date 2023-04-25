import React from "react";
import styled from "styled-components";
import emptyState from "../../images/empty.jpeg";

const Container = styled.div`
  position: absolute;
  align-items: center;
  top: 50%;
  display: flex;
  flex-direction: column;
  transform: translate(-50%, -50%);
  left: 50%;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;

const Message = styled.h2`
  font-size: 24px;
  margin-top: 20px;
`;

const NoResults = () => {
  return (
    <Container>
      <Image src={emptyState} alt="не найдено" />
      <Message>Для просмотра ничего не найдено.</Message>
    </Container>
  );
};

export default NoResults;
