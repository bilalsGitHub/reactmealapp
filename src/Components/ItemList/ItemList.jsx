import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";
const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      <h2>Item List</h2>
      {items.map(({ strMeal, strMealThumb, idMeal }) => (
        <Item
          key={idMeal}
          strMeal={strMeal}
          strMealThumb={strMealThumb}
          idMeal={idMeal}
        />
      ))}
    </div>
  );
};

export default ItemList;
