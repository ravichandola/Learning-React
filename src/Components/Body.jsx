import { useState } from "react";
import { restaurantList } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import SearchComponent from "./SearchComponent";

export const BodyComponent = () => {
  const [list, setList] = useState(restaurantList);
  return (
    <>
      <SearchComponent list={list} setList={setList} />
      <div className="restaurant-list">
        {list.map((item, index) => {
          return <RestaurantCard key={item.data.id} {...item.data} />;
        })}
      </div>
    </>
  );
};
