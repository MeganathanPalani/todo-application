import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ getInputValue, action }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="searchbox">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputValue && action === "add") {
            return;
          }
          getInputValue(inputValue);
          if (action === "add") {
            setInputValue("");
          }
        }}
      >
        <input
          type="text"
          name="searchItems"
          placeholder={action === "add" ? "Add New" : "Search Items..."}
          value={inputValue}
          onChange={(e) => {
            const { value } = e.target;
            setInputValue(value);
          }}
        />
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  getInputValue: PropTypes.func,
  action: PropTypes.string,
};

export default SearchBox;
