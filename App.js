import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Main from './src/App';
import rootReducer from './src/store/reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk)
);

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
