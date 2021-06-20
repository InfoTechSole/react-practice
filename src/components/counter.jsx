import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        {/* React.Fragment is child of 'React' */}
        <img src={this.state.imageUrl} alt="Picsum" />
        {/* <img src="https://picsum.photos/200" /> */}
        {/* If we use double quotes for 'src' then its value will render as 'plain text' */}
        <span style={this.styles} className="badge badge-primary m-2">
          {" "}
          {this.formatCount()}{" "}
        </span>
        {/* 'class' is reserved word in js/jsx so we need to use 'className' for html class attribute */}
        <button style={{ fontSize: 16 }} className="btn btn-secondary btn-sm">
          {" "}
          Increment{" "}
        </button>
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
