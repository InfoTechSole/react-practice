import React, { Component } from "react";

class Counter extends Component {
  // The component that OWNS a piece of the state, should be the one modifying it.
  state = {
    count: this.props.value
  };

  handleIncrement = product => {
    this.setState({ count: this.state.count + 1 });
    console.log(product);
  };

  render() {
    console.log(this.props);
    // It will print following result:
    // {value: 4, children: {…}}
    // children:
    // $$typeof: Symbol(react.element)
    // key: null
    // props: {children: " Title "}
    // ref: null
    // type: "h4"

    return (
      <React.Fragment>
        <div>
          {this.props.children}
          {/* Now 'props.children' will print following: */}
          {/* {id: 1, value: 4, onDelete: ƒ} */}
          {/* {id: 2, value: 0, onDelete: ƒ} */}
          {/* {id: 3, value: 0, onDelete: ƒ} */}
          {/* {id: 4, value: 0, onDelete: ƒ} */}

          <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
          <button
            onClick={() => this.handleIncrement()}
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
