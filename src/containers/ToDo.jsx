import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBox from './SearchBox';
import ListItems from './ListItems';
import Footer from './Footer';
import {
  addToDos,
  filterAction,
  getToDos,
  searchToDos,
  updateAction,
  updateToDo,
} from '../store/actions/toDoAction';

const ToDo = ({
  toDos,
  addToDos,
  searchToDos,
  action,
  updateAction,
  status,
  filterAction,
  updateToDo,
  searchText,
}) => {
  useEffect(() => {
    getToDos();
  }, []);
  const handleInput = (value) => {
    if (action === "add") {
      const payload = {
        id: toDos.length > 1 ? toDos.length + 1 : 1,
        title: value,
        status: 1,
      };
      addToDos(payload);
    } else {
      searchToDos(value);
    }
  };
  const toDoData =
    status === 0 ? toDos : toDos.filter((item) => item.status === status);
  const finalData = searchText
    ? toDoData.filter((item) => item.title.search(searchText) >= 0)
    : toDoData;
  return (
    <Fragment>
      <div className="outer-box">
        <div className="head-section">
          <h1>THINGS TO DO</h1>
          <SearchBox getInputValue={handleInput} action={action} />
          <ListItems toDos={finalData} updateToDo={updateToDo} />
        </div>
        <Footer
          action={action}
          updateAction={updateAction}
          filterAction={filterAction}
          status={status}
          completeRecords={finalData.filter(item => item.status === 1).length}
        />
      </div>
    </Fragment>
  );
};

ToDo.propTypes = {
  toDos: PropTypes.array,
  getToDos: PropTypes.func,
  addToDos: PropTypes.func,
  searchToDos: PropTypes.func,
  action: PropTypes.string,
  updateAction: PropTypes.func,
  filterAction: PropTypes.func,
  status: PropTypes.number,
  updateToDo: PropTypes.func,
  searchText: PropTypes.any,
};

const mapStateToProps = (state) => {
  return {
    toDos: state.toDos,
    action: state.action,
    status: state.status,
    searchText: state.searchText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getToDos: () => dispatch(getToDos()),
    addToDos: (data) => dispatch(addToDos(data)),
    updateAction: (action) => dispatch(updateAction(action)),
    searchToDos: (title) => dispatch(searchToDos(title)),
    filterAction: (status) => dispatch(filterAction(status)),
    updateToDo: (index, checked) => dispatch(updateToDo(index, checked)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
