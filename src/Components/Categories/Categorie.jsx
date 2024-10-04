import React from "react";
import "./Categorie.css";
const Categorie = ({ idCategory, strCategory, onclick }) => {
  const clickhandler = () => {
    onclick(strCategory);
  };
  return (
    <div onClick={clickhandler} className="categorie">
      <h2>{strCategory}</h2>
    </div>
  );
};

export default Categorie;
