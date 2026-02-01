import axios from "axios";
const API_BASE_URL = "/api/api/v1";
// Get restaurant list
const API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.7172&lng=85.3240&page_type=DESKTOP_WEB_LISTING";

export const getRestaurants = async () => {
  try {
    const { data } = await axios.get(API_URL);

    return (
      data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  } catch (err) {
    console.error(err);
    return [];
  }
};
// Get restaurant menu
export const getRestaurantMenu = async (restaurantId) => {
try {
const { data } = await axios.get(
`${API_BASE_URL}/listRestaurantMenu/${restaurantId}`
);
return data.data;
} catch (error) {
throw error;
}
};