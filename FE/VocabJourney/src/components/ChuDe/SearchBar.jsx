import React from "react";
import { Search } from "lucide-react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Tìm kiếm chủ đề luyện với..."
          className="search-input"
        />
        <button className="search-button">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
