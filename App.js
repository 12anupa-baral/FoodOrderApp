import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import RestaurantContainer from "./components/Restaurants/RestaurantContainer";
import Layout from "./components/Layout";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
     <Layout>
        <RestaurantContainer />
      </Layout>
      </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
