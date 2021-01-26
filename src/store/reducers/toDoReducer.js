import {
  GET_TODOS,
  ADD_TODOS,
  SEARCH_TODOS,
  UPDATE_ACTION,
  FILTER_ACTION,
  UPDATE_TODO,
} from '../actions/actionTypes';

/* 
  status 
    0 => All,
    1 => Active,
    2 => Completed 
*/
const initialState = {
  toDos: [
    {
      id: 1,
      title: "Learn Javascript",
      status: 2,
    },
    {
      id: 2,
      title: "Learn React",
      status: 1,
    },
    {
      id: 3,
      title: "Build a React App",
      status: 1,
    },
  ],
  action: "add",
  status: 0,
  searchText: "",
};

export const toDoReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
      };
    case ADD_TODOS:
      return {
        ...state,
        toDos: [...state.toDos, action.data],
      };
    case SEARCH_TODOS: {
      const regex = new RegExp(`${action.title.trim()}`, "i");
      return {
        ...state,
        searchText: regex,
      };
    }
    case UPDATE_ACTION:
      return {
        ...state,
        action: action.action,
      };
    case FILTER_ACTION:
      return {
        ...state,
        status: action.status,
      };
    case UPDATE_TODO: {
      const index = action.data.index;
      const checked = action.data.checked;
      const currentToDos = state.toDos;
      if (checked) {
        currentToDos[index].status = 2;
      } else {
        currentToDos[index].status = 1;
      }
      return {
        ...state,
        toDos: [...currentToDos],
      };
    }
    default:
      return state;
  }
};
