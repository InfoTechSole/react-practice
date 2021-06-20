import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  render() {
    // let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}> {this.formatCount()} </span>
        <button className="btn btn-secondary btn-sm"> Increment </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
            // key should be unique only for specified/given list/block
          ))}
        </ul>
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
