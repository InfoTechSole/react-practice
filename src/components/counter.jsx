import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  // To updte 'state' we need to use one of method 'setState' inherited from base 'Component' of react
  handleIncrement = () => {
    // console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
    // this.setState() is telling react that the value of this component is going to change.
    // React then schedule a call to the 'render' method that sometime in the future,
    // this method is going to be called, we don't know when
  };

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
    // Using 'object destructring' to extract 'state' object properties
    const { count } = this.state;

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
