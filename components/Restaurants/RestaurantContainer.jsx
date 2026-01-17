import React from "react";
import SearchReastaurant from "./SearchReastaurant";
import RestaurantCard from "./RestaurantCard";
import styles from './style.module.css';

const RestaurantContainer = () => {
    return (
        <div>
            <div className={styles.searchBar}>
                <SearchReastaurant />
                </div>
            <div className={styles.resContainer}>
            <RestaurantCard/>
                </div>
        </div>
    );
};

export default RestaurantContainer;
