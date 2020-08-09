import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";

export const ContainerMovie = styled.div`
  display: grid;
  background-color: #ffffff;
  grid-template-columns: auto 1fr;

  ${respondTo.xs`

  `}
  ${respondTo.md`
    padding-bottom: 20px;
  `}
`;

export const TitleContainer = styled.div`
  grid-column: 1/3;
  padding: 10px 0 10px 20px;

  h2 {
    margin-top: 5px;
    margin-bottom: 5px;
    color: #ff6d00;
  }

  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  ${respondTo.xs`
    h2 {
      font-size: 1.8rem;
    }
  `}
`;

export const ImageContainer = styled.div`
  padding: 0 20px 10px 20px;
  grid-column: 1/3;

  

  img {
    width: 100%;
    -webkit-box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
    box-shadow: 10px 9px 10px -5px rgba(0,0,0,0.75);
  }

  ${respondTo.xs`
    display: grid;
    justify-content: center;
    padding: 0 25px 0 25px;

    img {
    }
  `}

  ${respondTo.sm`
    justify-content: center;
    img {
      width: 100%;
    }
  `}

  ${respondTo.md`
    display: grid;
    grid-column: 1/2;
    padding-right: 0px;

    h2 {
      font-size: 3rem;
      color: #f9a825;
    }

    img {
      border-radius: 6px 0 0 6px;
    }
  `}
`;

export const StyleContainer = styled.div`
  margin: 10px;
  padding: 20px;
  border-radius: 6px;
  background-color: rgba(82, 72, 156, .1);
  grid-column: 1/3;
    
  p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  
  p:nth-child(1) {
    margin-bottom: 10px;
  }

  span {
    font-weight: bold
  }

  ${respondTo.sm`
    margin: 35px;
    justify-content: center;
    grid-column: 1/2;

    img {
      width: 100%;
    }
  `}
  ${respondTo.md`
    grid-column: 2/3;
    margin: 0px 15px 0 0;
    border-radius: 0px 6px 6px 0;

  `}

  ${respondTo.lg`

    font-size: 1.1rem;
  `}
  
`;

export const IconHeart = styled.div`
  display: flex;
  align-items: end;

  svg {
    font-size: 2rem;
    color: #f34747;
    cursor: pointer;
    margin-left: 20px;

    &:hover {
      color: #f12727;
    }

    &:focus {
      font-size: 2.2rem;
    }
  }
`;
