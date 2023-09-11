// need to be mentioned with the use of onSubmit
"use client";
import React, { useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  );
};

export default SearchBar;
