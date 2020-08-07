import styled from "styled-components";

export const ContainCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: rgba(82, 72, 156, .1);
  border-radius: 6px;
  /* height: fit-content; */

  h4 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: "Comfortaa", cursive;
    font-size: 20px;
  }

  img {
    width: 100%;
    -webkit-box-shadow: 10px 9px 10px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 9px 10px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 9px 10px -5px rgba(0, 0, 0, 0.75);
  }
`;

export const IconAndText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  p {
    margin: 2px;
    font-weight: bold;
    font-family: monospace;
  }

  div {
    display: flex;
    margin-left: 10px;
    font-size: 13px;
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
  
`;