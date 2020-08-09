import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";

export const Contain = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 80%;
  background-color: rgba(116, 114, 116, 0.3);
  margin-top: 10px;
  padding: 1.2rem;
  border-radius: 6px;

  input {
    width: -webkit-fill-available;
    font-size: 1.4rem;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid white;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8px 20px 8px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    background-color: rgba(116, 114, 116, 0.8);
    color: white;
    outline: none;

    &:hover {
      background-color: rgba(116, 114, 116, 1);
    }
  }
`;

export const MoviesContainer = styled.div`
  display: grid;
  gap: 10px;
  padding: 16px;

  ${respondTo.xs`
    grid-template-columns: 1fr;
  `}

  ${respondTo.sm`
    grid-template-columns: 1fr 1fr;
  `}

  ${respondTo.md`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}

  ${respondTo.lg`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  `}
`;

export const ErrorMessage = styled.div`
  margin-top: 10px;
  border-radius: 5px;
  background-color: #f54848;
  padding: 0 10px 0 10px;
  color: #ffffff;
  border: 1px solid #f42727;
`;
