import React, { useEffect, useState } from "react";
import "./Categories.css";
import Categorie from "./Categorie";
import axios from "axios";

const Categories = ({ onclick }) => {
  const [categories, setcategories] = useState([]);

  const fetchcategorie = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    console.log(response.data.categories);
    setcategories(response.data.categories);
  };

  useEffect(() => {
    fetchcategorie();
  }, []);

  return (
    <div className="categories">
      {categories.map(({ idCategory, strCategory }) => {
        return (
          <Categorie
            onclick={onclick}
            key={idCategory}
            strCategory={strCategory}></Categorie>
        );
      })}
    </div>
  );
};

export default Categories;
