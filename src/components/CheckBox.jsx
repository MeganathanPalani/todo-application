import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ label, index, checked, updateToDo }) => (
  <Fragment>
    <label className="main">
      <span className="outer-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            updateToDo(index, e.target.checked);
          }}
        />
        <span className="checkmark"></span>
      </span>
      {label}
    </label>
  </Fragment>
);

CheckBox.propTypes = {
  label: PropTypes.string,
  index: PropTypes.number,
  checked: PropTypes.bool,
  updateToDo: PropTypes.func,
};

export default CheckBox;
