import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";


export const ContainMovies = styled.div`
  padding: .5rem;
  display: grid;
  gap: 10px;
  background-color: #FFFFFF;
  grid-row-gap: 20px;
  
  ${respondTo.xs`
    padding: 2rem;
    grid-template-columns: 1fr;
  `}

  ${respondTo.sm`
    gap: 20px;
    padding: 2rem;
    grid-template-columns: 1fr 1fr;
  `}

  ${respondTo.md`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `}

  ${respondTo.lg`
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  `}
  
`;
