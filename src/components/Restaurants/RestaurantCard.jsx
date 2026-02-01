import React from 'react';
import styles from './style.module.css';
import { mockData } from '../../utils/mockData';



const RestaurantCard = ({ restaurantData }) => {
  return (
    <>
      {mockData.map((resData) => (
        <div className={styles.resCard}>
          <img
            className={styles.reslogo}
            alt="res-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Burger_king_whopper.jpg/220px-Burger_king_whopper.jpg"
          />
          <h3>{resData.name}</h3>
          <h4>{resData.description}</h4>
          <div className={styles.foodInfo}>
            <div className={styles.rating}>⭐{resData?.rating}</div>
            <div className={styles.time}>{resData?.time}</div>
            <div className={styles.price}>{resData.price}</div>
          </div>
          <div className={styles.offer}>{resData?.offer}</div>
          <button>Quick View</button>
        </div>
      ))}
    </>
  );
};
    

  export default RestaurantCard;
