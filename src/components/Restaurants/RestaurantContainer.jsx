import React, { useEffect, useState } from "react";
import SearchReastaurant from "./SearchReastaurant";
import RestaurantCard from "./RestaurantCard";
import styles from "./style.module.scss";
import { getRestaurants } from "../APIHelper";
import Shimmer from "../Shimmer";
const RestaurantContainer = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredData, setFilteredData] = useState();
  const [searchText, setSAearchText] = useState("");
  const [isTopFiltered, setIsTopFiltered] = useState(false);

  //whenever state variable changes or updates react triggers a reconciliation cycle(re-render the component)
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
    setFilteredData(filteredData);
    setIsTopFiltered(true);
  };

  const handleSearch = () => {
    const filteredData = restaurants.filter((item) =>
      item?.Name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredData(filteredData);
  };

  const handleReset = () => {
    setSAearchText("");
    setFilteredData();
    setIsTopFiltered(false);
  };

  //conditional rendering
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      {/* Top Section */}
      <div className={styles.topBar}>
        <SearchReastaurant
          searchText={searchText}
          setSAearchText={setSAearchText}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
        <button
          className={styles.filterBtn}
          onClick={isTopFiltered ? handleReset : handleFilter}
        >
          {isTopFiltered ? "Show All Restaurant" : "Filter Top Restaurants"}
        </button>
      </div>

      {/* Restaurant Grid */}
      <div className={styles.resContainer}>
        {(filteredData || restaurants).map((res) => (
          <RestaurantCard restaurantData={res} key={res?.Id} />
        ))}
      </div>
    </div>
  );
};;

export default RestaurantContainer;
