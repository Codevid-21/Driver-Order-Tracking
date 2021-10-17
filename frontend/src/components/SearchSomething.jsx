import React from "react";

function SearchSomething({ searchItem, setSearchItem }) {
  return (
    <div className="search__container">
      <i className="fas fa-search"></i>
      <input
        type="text"
        placeholder="Search.."
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </div>
  );
}

export default SearchSomething;
