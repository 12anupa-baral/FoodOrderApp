import React from "react";
import styles from "./style.module.scss";

const ShimmerCard = () => {
  return (
    <div className={styles.shimmerCard}>
      <div className={styles.cardimg}></div>
      <div className={styles.foodInfo}></div>
      <button className={styles.view}></button>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className={styles.shimmerContainer}>
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
        <ShimmerCard />
    </div>
  );
};

export default Shimmer;
