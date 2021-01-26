import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { toDoReducer } from './reducers/toDoReducer';

const middlewares = [thunk];
export const store = createStore(
  toDoReducer,
  applyMiddleware(...middlewares)
);