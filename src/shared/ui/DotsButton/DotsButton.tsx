import React from "react";

import styles from "./DotsButton.module.scss";

export const DotsButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  return (
    <button className={styles.button} {...props} type={props.type || "button"}>
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </button>
  );
};
