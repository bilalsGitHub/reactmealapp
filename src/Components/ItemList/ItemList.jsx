import React from "react";
import "./ItemList.css";
const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Item item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
