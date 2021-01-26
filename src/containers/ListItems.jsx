import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../components/CheckBox';

const ListItems = ({ toDos, updateToDo }) => (
  <Fragment>
    {toDos.length > 0 ? (
      toDos.map((element, i) => (
        <div key={element.id}>
          <CheckBox
            label={element.title}
            checked={element.status === 2}
            index={i}
            updateToDo={updateToDo}
          />
        </div>
      ))
    ) : (
      <div className="center">No items found.</div>
    )}
  </Fragment>
);

ListItems.propTypes = {
  toDos: PropTypes.array,
  updateToDo: PropTypes.func,
};

export default ListItems;
