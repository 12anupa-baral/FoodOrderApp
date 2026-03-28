import React from 'react';
import styles from "./style.module.scss";

const RestaurantCard = ({ restaurantData }) => {
  return (
    <>
      <div className={styles.resCard}>
        <img
          className={styles.reslogo}
          alt="res-logo"
          src={restaurantData?.VendorListingWebImageName}
          width="200px"
        />
        <h3>{restaurantData?.Name}</h3>
        <h4>{restaurantData?.PromoText}</h4>
        <div className={styles.foodInfo}>
          <div className={styles.rating}>⭐{restaurantData?.VendorRating}</div>
          <div className={styles.time}>{restaurantData?.time}</div>
          <div className={styles.price}>{restaurantData.DeliveryDuration}</div>
        </div>
        <div className={styles.offer} title={restaurantData?.CuisineTags}>
          {restaurantData?.CuisineTags}
        </div>
        <button className={styles.btn}>Quick View</button>
      </div>
    </>
  );
};
    

  export default RestaurantCard;
