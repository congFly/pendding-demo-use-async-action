import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import App from './components/App';
import rootReducer from './reducers';
import { fetchTodos   } from './actions';

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, createLogger())
);

store.dispatch(fetchTodos());

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
);