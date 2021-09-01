import React from "react";

const IngredientsFilter = (props) => {

  const {ingredientsSortedList, filteredIngredients, onChange} = props;

  return (
    <div style={{ padding: "1em" }}>
      {"Filter by Ingredients: "}
      <select value={filteredIngredients} onChange ={(option) => {onChange(option.target.value); console.log(option.target.value);}} >
        <option value="">(none)</option>
        {ingredientsSortedList.map((ingName) => (
          <option value={ingName} key={ingName}>{ingName}</option>
        ))}
      </select>
    </div>
  );
};

export default IngredientsFilter;
