import React, { Component } from 'react';
import TodoTable from './TodoTable';

const App = ()=> {
  return (
      <div>
        <div className="m-t-1">
          <button type="button" className="btn btn-primary">Refresh</button>
        </div>
        <TodoTable />
        
      </div>
  )
};

export default App;