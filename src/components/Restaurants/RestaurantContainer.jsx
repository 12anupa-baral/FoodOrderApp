import React, { useEffect, useState } from "react";
import SearchReastaurant from "./SearchReastaurant";
import RestaurantCard from "./RestaurantCard";
import styles from "./style.module.css";
import { getRestaurants } from "../APIHelper";

const RestaurantContainer = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const data = await getRestaurants();
      setRestaurants(data || []);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className={styles.searchBar}>
        <SearchReastaurant />
      </div>
      <div className={styles.resContainer}>
        <RestaurantCard restaurantData={restaurants} />
      </div>
    </div>
  );
};

export default RestaurantContainer;
