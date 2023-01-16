const SearchComponent = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="Search-input"
        placeholder="Search"
        value=""
      />
      <button className="search-btn">Search</button>
    </div>
  );
};

export default SearchComponent;
