import {
  GET_TODOS,
  ADD_TODOS,
  SEARCH_TODOS,
  UPDATE_ACTION,
  FILTER_ACTION,
  UPDATE_TODO,
} from './actionTypes';

export const getToDos = () => {
  return (dispatch) => {
    dispatch({ type: GET_TODOS });
  };
};

export const addToDos = (data) => {
  return (dispatch) => {
    dispatch({ type: ADD_TODOS, data });
  };
};

export const searchToDos = (title) => {
  return (dispatch) => {
    dispatch({ type: SEARCH_TODOS, title });
  };
};

export const updateAction = (action) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_ACTION, action });
  };
};

export const filterAction = (status) => {
  return (dispatch) => {
    dispatch({ type: FILTER_ACTION, status });
  };
};

export const updateToDo = (index, checked) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_TODO, data: { index, checked } });
  };
};
