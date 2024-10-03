import React from "react";
import "./Item.css";

const Item = ({ strMeal, strMealThumb, idMeal }) => {
  return (
    <div className="item">
      <h3>{strMeal}</h3>
      <img src={strMealThumb} alt={strMeal} />
      <p>ID: {idMeal}</p>
    </div>
  );
};

export default Item;
