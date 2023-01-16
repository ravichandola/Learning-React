import { useState } from "react"; //named export

const SearchComponent = () => {
  // const searchText = "KFC";
  // searchText is the local state variable
  const [searchText, setSearchText] = useState();
  return (
    <div className="search-container">
      <input
        type="text"
        className="Search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchComponent;
