import { respondTo } from "../../styles/_respondTo";
import styled from "styled-components";

export const ContainMovies = styled.div`
  padding: 1rem;
  display: grid;
  gap: 10px;
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
