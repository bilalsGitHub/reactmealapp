import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ gettheinput }) => {
  const [input, setInput] = useState(""); // setinput yerine setInput yapıldı.

  const inputHandler = (event) => {
    setInput(event.target.value); // Input alanına girilen değeri güncelle
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Formun varsayılan submit davranışını engelle
    gettheinput(input); // Form submit edildiğinde input değerini üst bileşene gönder
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={inputHandler}
          type="text"
          placeholder="Type in"
        />
        <button type="submit">Submit</button> {/* Formu göndermek için buton */}
      </form>
    </div>
  );
};

export default SearchBar;
