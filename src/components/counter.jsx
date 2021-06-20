import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement() {
    console.log("Increment Clicked");
    // console.log(this.state.count); // This line will cause error: can not read property of undefined
    // 'this' keyword is not accessible in regular javascript function
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // Using 'object destructring' to extract object properties
    const { count, test } = this.state;
    console.log(test);

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
