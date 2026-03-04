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
    const data = await fetch(
      "https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=&LocationLat=0&LocationLng=0&PageNo=1&PageSize=20&SortBy=4&VendorName=&VendorTags=%7B%7D&VendorTagsCSV=&search_by=restaurant",
    );
    const restaurant = await data.json();
    setRestaurants(restaurant);
  };

  const handleFilter = () => {
    const filteredData = restaurants.filter((item) => item?.VendorRating > 3.8);
    setRestaurants(filteredData);
  };

  return (
    <div>
      <div className={styles.searchBar}>
        <SearchReastaurant />
      </div>
      <button className={styles.filterBtn} onClick={handleFilter}>
        Filter Top Restaurants
      </button>
      <div className={styles.resContainer}>
        {restaurants.map((res) => (
          <RestaurantCard restaurantData={res} key={res?.Id} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantContainer;
