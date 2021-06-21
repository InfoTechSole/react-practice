import React, { Component } from "react";

class Counter extends Component {
  // A controlled component doesn't have its local state
  // Controlled component is handled by its parent

  render() {
    console.log("Counter - Rendered");
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>
              {" "}
              {this.formatCount()}{" "}
            </span>
          </div>
          <div className="col">
            <button
              onClick={this.props.onIncrement}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={this.props.onDecrement}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0}
            >
              -
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={this.props.onDelete}
            >
              X
            </button>
          </div>
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
