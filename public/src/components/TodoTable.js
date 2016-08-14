import React from 'react';

const TodoTable = ()=> {
  return (
      <div className="text-xs-center">
        <i className="m-t-1 fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>

        <table className="table">
          <thead className="thead-inverse">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </table>
      </div>

  )
};

export default TodoTable;
