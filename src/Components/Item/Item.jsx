import React from "react";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="item">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default Item;
