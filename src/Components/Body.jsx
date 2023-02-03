import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import SearchComponent from "./SearchComponent";

export const BodyComponent = () => {
  const [list, setList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    // API call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  //console.log(json);
  console.log("render");

  return (
    <>
      <SearchComponent restaurantList={list} setList={setFilteredRestaurants} />
      <div className="restaurant-list">
        {filteredRestaurants.map((item, index) => {
          return <RestaurantCard key={item.data.id} {...item.data} />;
        })}
      </div>
    </>
  );
};
