import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.includes(searchText)
  );
  return filterData;
}

const SearchComponent = ({ restaurantList, setList }) => {
  const [searchText, setSearchText] = useState("");
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
          const data = filterData(searchText, restaurantList);
          setList(data);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
