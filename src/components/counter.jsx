import React, { Component } from "react";

class Counter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* React.Fragment is child of 'React' */}
        <h1> Hello World </h1>
        <button> Increment </button>;
      </React.Fragment>
    );
  }
}

export default Counter;
