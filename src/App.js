import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ToDo from './containers/ToDo';

const App = () => (
  <Provider store={store}>
    <ToDo />
  </Provider>
);

export default App;
