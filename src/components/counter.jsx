import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    return (
      <React.Fragment>
        {/* React.Fragment is child of 'React' */}
        <span> {this.formatCount()} </span>
        <button> Increment </button>
      </React.Fragment>
    );
  }

  formatCount() {
    // return this.state.count === 0 ? "Zero" : this.state.count;

    // Formatting code to convert above lengthy statement to shorter version

    // Object 'Destructuring'
    const { count } = this.state; // Picking 'count' from this.state and storing into 'count'
    // return count === 0 ? "Zero" : count;
    return count === 0 ? <h1> Zero </h1> : count;
  }
}

export default Counter;
