import React, { Component } from 'react';

const Explanation = ({ props, styles }) => {
  return (
    <div className={styles.explanationWrapper}>
      <h1 className={styles.heading}>{props.title}</h1>
      <p className={styles.body}>{props.text}</p>
    </div>
  );
}

export default Explanation;
