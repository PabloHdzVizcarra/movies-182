import styled from 'styled-components';
import { respondTo } from '../../styles/_respondTo';

export const MoviesContainer = styled.div`
  display: grid;
  gap: 10px;
  padding: 16px;
  height: max-content;
  background-color: #FFFFFF;
  min-height: 87vh;

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