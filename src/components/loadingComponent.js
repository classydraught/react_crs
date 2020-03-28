import React, { Component } from 'react';
var Spinner = require('react-spinkit');
class Loading extends Component {
  render() {
    return (
      <div className="col-12" style={{ height: '100vh' }}>
        <Spinner
          name="cube-grid"
          color="purple"
          style={{ width: '10vh', height: '10vh' }}
        />
      </div>
    );
  }
}
export default Loading;
