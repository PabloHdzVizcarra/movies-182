import styled from "styled-components";

export const ContainNav = styled.div`
  display: grid;
  background-color: rgba(116, 114, 116, .9);
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  gap: 10px;
  padding-top: 10px;
  align-items: center;
  
`;

export const MainTitle = styled.div`
  font-size: 1.3rem;
  margin-left: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
 
  a {
    color: #e4e3e3;
    text-decoration: none;
    font-family: 'Comfortaa', cursive;
    font-size: 3rem;

    
    &:nth-child(2) {
      font-size: 1rem;
      margin-right: 15px;
      
    }
    
    svg {
      color: #4E5166;
      margin: 0 5px 0 5px;
      
      transition: 200ms ease color;
      &:hover {
        color: #66b3ff;
      }
    }
  }
  
  
`;

export const ContainButtons = styled.div`
  padding-bottom: 15px;

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
`;