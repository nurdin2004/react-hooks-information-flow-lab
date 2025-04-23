import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    // setIsDarkMode((isDarkMode) => !isDarkMode);
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      {/* <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header> */}
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
