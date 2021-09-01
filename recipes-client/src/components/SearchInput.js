import React from "react";

const SearchInput = (props) => {
  const { onChange } = props;

  return (
    <div style={{ padding: "1em" }}>
      {"Search in our Menu: "}
      <input type="text" onChange={(event) => onChange(event.target.value)} />
    </div>
  );
};

export default SearchInput;
