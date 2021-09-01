import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";

let apiUrl = "http://127.0.0.1:9000/list";

function App() {
  const [menuData, setMenu] = useState([]);

  // Fetching the Data from Backend and Updating the Menu Data

  const getData = (url) => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        console.log(response);
        setMenu(JSON.parse(response));
      });
  };

  useEffect(() => {
    getData(apiUrl);
  }, []);

  return (
    <div className="App">
      <Main menuItems={menuData} />
    </div>
  );
}

export default App;
