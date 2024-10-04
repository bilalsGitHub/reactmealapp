import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ItemList from "./Components/ItemList/ItemList";
import axios from "axios";
import Categories from "./Components/Categories/Categories";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const gettheinputcallback = (input) => {
    setInput(input);
    fetchData(input, false); // Arama terimine göre veriyi getir, random false
    setInput(""); // Arama terimini sıfırla
  };

  const fetchData = async (term = "", isRandom = false, strCategory = "") => {
    try {
      let response;
      if (isRandom) {
        response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );

        if (strCategory.trim().length != 0) {
          const categoryResponse = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
          );
          setItems(categoryResponse.data.meals || []); // Use meals from the category response
          console.log(categoryResponse.data.meals);
          return; // Exit the function after fetching by category
        }
      } else {
        response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
        );
      }

      if (response.data.meals) {
        setItems(response.data.meals);
        console.log(response.data.meals);
      } else {
        setItems([]); // Eğer veri yoksa boş bir dizi ayarla
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(); // İlk renderda tüm yemekleri getir
  }, []);

  const gettherandommealhandler = () => {
    fetchData("", true); // random true, arama terimi boş
  };

  const fetchMealsByCategory = (categoryname) => {
    console.log("categoryname" + categoryname);
    fetchData("", true, categoryname);
  };
  return (
    <>
      <Header
        gettherandommeal={gettherandommealhandler}
        gettheinput={gettheinputcallback}
      />
      <Categories onclick={fetchMealsByCategory}></Categories>
      <h1>App jsx</h1>
      <h1>{input}</h1>
      <ItemList items={items} /> {/* items dizisini doğrudan gönderiyoruz */}
    </>
  );
}

export default App;
