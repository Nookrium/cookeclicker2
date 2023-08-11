import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-items: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1 {
    color: blue;
  }

  .text-2 {
    color: orange;
  }

  .text-3 {
    color: red;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  width: 80%;
  align-items: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  align-items: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button{
      margin: 0 auto;
    }
  }
`;

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Cooke Clicker on Ethereum
      </Title>
      <SubTitle>Click on the cookie to obtain $COOKE/ETH</SubTitle>
      {/* <ButtonContainer>
        <Button text="Explore" link="">
          Explore
        </Button>
      </ButtonContainer> */}
    </>
  );
};

export default TypeWriterText;
