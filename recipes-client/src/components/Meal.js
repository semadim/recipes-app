import React from "react";

const Meal = (props) => {
  const {
    menuItem: { title, ingredients },
  } = props;

  return (
    <tr>
      <td
        className="rowTitle"
        width="40%"
        style={{ fontWeight: "bold", textAlign: "left", padding: "1em" }}
      >
        {title}
      </td>
      <td
        className="rowIngr"
        width="60%"
        style={{ textAlign: "right", padding: "1em" }}
      >
        {ingredients.join(", ")}
      </td>
    </tr>
  );
};

export default Meal;
