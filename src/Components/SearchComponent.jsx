import { useState } from "react";
import { restaurantList } from "../config";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.includes(searchText)
  );
  return filterData;
}

const SearchComponent = () => {
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <div className="search-container">
      <input
        type="text"
        className="Search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          console.log("clicked");
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          const data = filterData(searchText, restaurants);
          setRestaurants(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
