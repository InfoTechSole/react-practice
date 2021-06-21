import React, { Component } from "react";

class Counter extends Component {
  // A controlled component doesn't have its local state
  // Controlled component is handled by its parent

  render() {
    return (
      <React.Fragment>
        <div>
          <span className={this.getBadgeClasses()}> {this.formatCount()} </span>

          <button
            onClick={this.props.onIncrement}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={this.props.onDelete}
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // Using 'object destructring' to extract 'state' object properties
    const { value } = this.props.counter;

    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
