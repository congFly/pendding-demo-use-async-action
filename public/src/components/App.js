import React, { Component } from 'react';

const App = ()=> {
  return (
      <div>
        <div className="m-t-1">
          <button type="button" className="btn btn-primary">Refresh</button>
        </div>
        <i className="m-t-1 fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        <span className="sr-only">Loading...</span>
      </div>
  )
};

export default App;