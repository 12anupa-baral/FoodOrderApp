import React from 'react'
import style from "./style.module.scss";

const SearchReastaurant = ({ searchText, setSAearchText, handleSearch }) => {
  const handleInput = (e) => {
    setSAearchText(e.target.value);
  };
  return (
    <div className={style.search}>
      <input type="text" value={searchText} onChange={handleInput} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchReastaurant