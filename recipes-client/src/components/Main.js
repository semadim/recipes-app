import React, { useState } from "react";
import ItemsList from "./ItemsList";
import SearchInput from "./SearchInput";
import IngredientsFilter from "./IngredientsFilter";

// Component that defines the main logic of the App

const Main = (props) => {
  
  const { menuItems } = props;

  // States
  const [needle, setNeedle] = useState("");
  const [filteredIngName, setFilteredIngName] = useState("");

  // Generate Ingredients list
  const ingredientsSet = new Set();
  menuItems.forEach((menuItem) => {
    menuItem.ingredients.forEach((ingName) => {
      ingredientsSet.add(ingName);
    });
  });
  const ingredientsSortedList = [...ingredientsSet.values()].sort();

  // Search matching
  const matchesNeedle = (haystack) => {
    const canonHaystack = haystack.toLowerCase();
    const canonNeedle = needle.toLowerCase();
    return canonHaystack.indexOf(canonNeedle) >= 0;
  };

  // Ingredient filter matching
  const matchesIngred = (ingName) => {
    const canonIngName = ingName.toLowerCase();
    const canonFilteredIngName = filteredIngName.toLowerCase();
    return canonIngName === canonFilteredIngName;
  };

  // List filtering
  let shownItems = menuItems;
  if (needle || filteredIngName){
    shownItems = menuItems.filter((item) => {
      const { title, ingredients } = item;
      const searchMatch =
        matchesNeedle(title) || ingredients.find(matchesNeedle);     
      const filterMatch = ingredients.find(matchesIngred);
  
      return searchMatch && filterMatch;
    });
  }

  return (
    <div className="Main">
      <h1>Menu</h1>
      <SearchInput
        onChange={(needle) => {
          setNeedle(needle);
        }}
      />

      <IngredientsFilter
        ingredientsSortedList={ingredientsSortedList}
        filteredIngredients={filteredIngName}
        onChange={setFilteredIngName}
      />

      {needle && <h2>Results</h2>}
      {shownItems.length ? (
        <ItemsList menuItems={shownItems}></ItemsList>
      ) : (
        <p>No match! Try again?</p>
      )}
    </div>
  );
};

export default Main;
