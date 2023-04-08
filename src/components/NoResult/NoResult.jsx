import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
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
      {/* <Image src="/no-results.png" alt="No results found" /> */}
      <Message>Sorry, we couldn't find any results for your search.</Message>
    </Container>
  );
};

export default NoResults;
