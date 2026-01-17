import React from 'react';
import styles from './style.module.css';



const RestaurantCard = () => {
 const restaurantData = [
  {
    id: 1,
    name: "Burger Restaurant",
    description: "Burger king large whopper meal",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Burger_king_whopper.jpg/220px-Burger_king_whopper.jpg",
    rating: 4.0,
    time: "30 min",
    price: "Rs 100",
    offer: "40% off ! Use Specials",
  },
  {
    id: 2,
    name: "Pizza Palace",
    description: "Cheese burst pizza with extra toppings",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Supreme_pizza.jpg",
    rating: 4.5,
    time: "25 min",
    price: "Rs 250",
    offer: "20% off ! Use NEWUSER",
  },
  {
    id: 3,
    name: "Momo Hub",
    description: "Steamed chicken momos (10 pcs)",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Momo_nepal.jpg",
    rating: 4.2,
    time: "20 min",
    price: "Rs 180",
    offer: "Flat Rs 50 off",
  },
  {
    id: 4,
    name: "Biryani House",
    description: "Hyderabadi chicken dum biryani",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4b/Hyderabadi_Chicken_Biryani.jpg",
    rating: 4.6,
    time: "35 min",
    price: "Rs 320",
    offer: "30% off ! Limited Time",
  },
  {
    id: 5,
    name: "Cafe Delight",
    description: "Cold coffee with chocolate brownie",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Cold_coffee.jpg",
    rating: 4.3,
    time: "15 min",
    price: "Rs 150",
    offer: "Buy 1 Get 1 Free",
  },
];

  
  return (
    <>
      {restaurantData.map((resData) => (
          <div className={styles.resCard}>
          <img className={styles.reslogo} alt="res-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Burger_king_whopper.jpg/220px-Burger_king_whopper.jpg" />
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
    
    
      </>)
}
    

  export default RestaurantCard;
