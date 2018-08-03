import React, { Component } from 'react';

class TableYG extends Component {
  render() {
    return (
      <div>
        <table border="1">
          <tr>
            <th>Title1</th>
            <th>Title2</th>
          </tr>
          
          <tr>
            <td colSpan="2">Test11</td>
          </tr>
          
          <tr>
            <td>Test21</td>
            <td>Test22</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default TableYG;
