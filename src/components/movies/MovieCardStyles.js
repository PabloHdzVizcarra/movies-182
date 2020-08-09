import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";

export const ContainCard = styled.div`
  display: grid;
  flex-direction: column;
  background-color: rgba(82, 72, 156, .1);
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  padding-bottom: 10px;

  h4 {
    font-family: 'Roboto', sans-serif;
    font-weight: 900;
    font-size: 20px;
    color: #ff6d00;
    margin: 5px;
  }

  img {
    border-radius: 6px 6px 0 0;
    width: 100%;
    -webkit-box-shadow: 10px 9px 10px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 9px 10px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 9px 10px -5px rgba(0, 0, 0, 0.75);
  }

  svg {
    font-size: 25px;
  }

  ${respondTo.sm`
    img {
      height:550px;
    }
  `}
  ${respondTo.md`
    img {
      height: 360px;
    }
  `}
  ${respondTo.lg`
    img {
      height: 315px;
    }
  `}

  ${respondTo.xg`
    img {
      height: 380px;
    }
  `}

  
`;

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2px;

  p {
    margin: 2px;
    font-size: 14px;
    font-weight: 400;
  }

  div {
    display: flex;
    margin-left: 5px;
  }
`;

export const TitleAndIcon = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  svg {
    &:hover {
      color: #ff1a1a;
      cursor: pointer;
    }
  }
`;

export const InfoData = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  width: 100%;

`;

export const TextDeleteMovie = styled.p`
  margin: 0;
  margin-left: 7px;
  font-size: 15px;
  color: #ff3333;
  font-weight: bold;
  cursor: pointer;
  width: fit-content;
  margin-top: -5px;

  transition: ease color 300ms;

    &:hover {
      color: #D50000;
    }
`;