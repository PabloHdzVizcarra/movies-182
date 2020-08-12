import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";

export const MoviesContainer = styled.div`
  display: grid;
  gap: 10px;
  padding: 16px;
  height: min-content;
  background-color: #FFFFFF;

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

export const TextInfo = styled.p`
  color: #f55019;
  margin-top: 2rem;
  font-size: 1rem;

  ${respondTo.sm`
    grid-column: 1 / 3;
    
  `}

  ${respondTo.md`
    grid-column: 1 / 5;

  `}

  ${respondTo.lg`
    grid-column: 1 / 7;

  `}

  ${respondTo.xg`
    grid-column: 1 / 7;
    font-size: 1.4rem;
  `}

`;
