import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";
const ItemList = ({ items }) => {
  console.log("girdi");
  console.log(items);
  return (
    <div>
      <h2>Item List</h2>
      <div className="item-list">
        {items.map(({ strMeal, strMealThumb, idMeal }) => (
          <Item
            key={idMeal}
            strMeal={strMeal}
            strMealThumb={strMealThumb}
            idMeal={idMeal}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
