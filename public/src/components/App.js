import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from './Todos';
import { fetchTodos } from '../actions';

const App = ({dispatch})=> {
  return (
      <div>
        <div className="m-t-1">
          <button
              type="button"
              className="btn btn-primary"
              onClick={()=> {
                dispatch(fetchTodos());
              }}
          >
            Refresh
          </button>
        </div>
        <Todos />
      </div>
  )
};



export default connect()(App);