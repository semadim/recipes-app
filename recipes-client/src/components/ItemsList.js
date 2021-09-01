import React from "react";
import Meal from "./Meal";

const ItemsList = (props) => {
  const { menuItems } = props;
  return (
    <table>
      <tbody>
        {menuItems.map((menuItem) => (
          <React.Fragment key={menuItem["id"]}>
            <Meal menuItem={menuItem}></Meal>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ItemsList;
