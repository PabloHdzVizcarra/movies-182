import React from "react";
import styles from "./Spinner.module.css";
import { SpinnerContainer } from "./SpinnerStyles";

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
