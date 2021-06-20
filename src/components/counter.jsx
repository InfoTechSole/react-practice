import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };
  // One way to access current 'counter' object is to bind event handler to 'this'
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // 'this' keyword is not accessible in regular javascript function
  // 'this' in javascript behaves differently as compared to other languages
  // obj.method() will return reference to current object
  // function() will return 'window' object,
  // but if strict mode is enabled then it will return 'undefined'
  // handleIncrement() {
  //   console.log("Increment Clicked");
  //   // console.log(this.state.count); // This line will cause error: can not read property of undefined
  // }

  //   2nd way is to use arrow function
  //   Arrow functions don't rebind 'this' keyword, they inherit interopDefault
  handleIncrement = () => {
    console.log("Increment Clicked", this);
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
    // Using 'object destructring' to extract object properties
    const { count, test } = this.state;
    console.log(test);

    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
