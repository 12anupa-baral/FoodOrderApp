import React from 'react'
import style from "./style.module.scss";

const SearchReastaurant = ({
  searchText,
  setSAearchText,
  handleSearch,
  handleReset,
}) => {
  const handleInput = (e) => {
    setSAearchText(e.target.value);

    if (e.target.value === "") {
      handleReset(); // reset list
    }
  };
  return (
    <div className={style.search}>
      <input
        type="text"
        value={searchText}
        onChange={handleInput}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchReastaurant