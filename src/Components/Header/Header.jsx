import React from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ gettheinput }) => {
  return (
    <div className="card-header">
      <h2>Welcome</h2>
      {/* gettheinput prop'unu SearchBar bileşenine iletin */}
      <SearchBar gettheinput={gettheinput} />
    </div>
  );
};

export default Header;
