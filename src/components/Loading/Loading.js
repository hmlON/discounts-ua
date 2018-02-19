import React, { Component } from 'react';
import './Loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <div className="LoadingCircle">
          Loading...
        </div>
      </div>
    );
  }
}

export default Loading;
