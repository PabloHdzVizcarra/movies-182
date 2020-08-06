import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";

export const ContainNav = styled.div`
  display: grid;
  background-color: #302B27;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  gap: 10px;
  align-items: center;



  ${respondTo.sm`
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  `}

  ${respondTo.md`
    justify-content: space-between;
    display: flex;
    align-items: center;
  `}

  ${respondTo.lg`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`; 

export const MainTitle = styled.div`
  font-size: 1.3rem;
  margin-left: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  

  h1 {
    margin: 2px;
    cursor: pointer;
    font-family: 'Indie Flower', cursive;
    color: white;
  }

  ${respondTo.sm`

    h1 {
      font-size: 28px;
    }
  `}

  ${respondTo.md`
    margin-top: -10px;
    justify-content: space-between;
    display: flex;
    align-items: center;

    h1 {
      font-size: 2.2rem;
    }
  `}

  ${respondTo.lg`
    margin-top: -10px;

    h1 {
      font-size: 2.2rem;
    }
  `}

`;

export const ContainButtons = styled.div`

  padding-bottom: 10px;
  display: grid;
  gap: 5px;
  

  ${respondTo.xs`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    button {
      margin-top: 15px;
    }
  `}

  ${respondTo.sm`
    display: flex;
    align-items: center;
  `}
  ${respondTo.md`
    display: flex;
    align-items: center;
  `}
  ${respondTo.lg`
    display: flex;
    align-items: center;
  `}

  a {
    background-color: rgba(116, 114, 116, .7);
    padding: 5px;
    border-radius: 6px;
    text-decoration: none;
    color: #B9B7A7;
    margin: 0 5px 0 5px;

    transition: 300ms ease background-color;
    transition: 300ms ease color;
    &:hover {
      background-color: rgba(116, 114, 116, 1);
      color: #39372d;
    }
  }

  svg {
    margin-left: 5px;

    transition: 300ms ease color;
    &:hover {
      color: #3385ff;
    }
  }
  
  button {
    background-color: #ff4d4d;
    padding: 7px;
    border-radius: 6px;
    text-decoration: none;
    color: white;
    margin: 0 5px 0 5px;
    border: none;
    cursor: pointer;


    transition: 300ms ease background-color;
    transition: 300ms ease color;
    &:hover {
      background-color: #ff0000;
      color: white;
    }
  }

  
`;