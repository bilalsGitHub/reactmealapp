import React from "react";
import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";

const Header = ({ gettheinput, gettherandommeal }) => {
  return (
    <div className="card-header">
      <h2>Welcome</h2>
      {/* gettheinput prop'unu SearchBar bileşenine iletin */}
      <SearchBar
        gettherandommeal={gettherandommeal}
        gettheinput={gettheinput}
      />
    </div>
  );
};

export default Header;
