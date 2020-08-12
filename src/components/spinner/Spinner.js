import React from "react";
import styles from './Spinner.module.css';
import styled from "styled-components";
import { respondTo } from "../../styles/_respondTo";

export const SpinnerContainer = styled.div`
  display: flex;
  height: 50vh;
  justify-content: center;
  align-items: center;

  ${respondTo.sm`
    display: flex;
    height: 85vh;
  `}

  ${respondTo.md`
    display: flex;
    height: 85vh;
  `}

  ${respondTo.lg`
    display: flex;
    height: 85vh;
  `}

  ${respondTo.xg`
    display: flex;
    height: 85vh;
  `}

`;

export const Spinner = () => {
  return (
    <SpinnerContainer>
        <div className={styles.ldsRing}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </SpinnerContainer>
  );
};
