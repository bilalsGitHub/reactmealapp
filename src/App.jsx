import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ItemList from "./Components/ItemList/ItemList";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const gettheinputcallback = (input) => {
    setInput(input);
    fetchData(input); // Arama terimine göre veriyi getir
    setInput(""); // Arama terimini sıfırla
  };

  const fetchData = async (term = "") => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`
      );
      if (response.data.meals) {
        console.log("response.data.meals" + response.data.meals);
        setItems(response.data.meals);
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

  return (
    <>
      <Header gettheinput={gettheinputcallback} />
      <h1>App jsx</h1>
      <h1>{input}</h1>
      <ItemList items={items} /> {/* items dizisini doğrudan gönderiyoruz */}
    </>
  );
}

export default App;
