import React, { Component } from "react";

class Counter extends Component {
  // The component that OWNS a piece of the state, should be the one modifying it.
  state = {
    value: this.props.counter.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
          <button className="btn btn-primary m-2 btn-sm" onClick={this.onClick}>
            Reset
          </button>
          <button
            onClick={() => this.handleIncrement()}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete()}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // Using 'object destructring' to extract 'state' object properties
    const { value } = this.state;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
