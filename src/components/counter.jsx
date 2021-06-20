import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags. </p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {/* In javascript we can apply logical AND operator between non-boolean values
        In JS, when AND operator is used among multiple value then; if 1st value is true then it continues to evaluate, and it will return last value if all are true
        For example: true && 'Hi' will return 'Hi'
        true && 'Hi' && 1 will return 1  */}
        {this.state.tags.length === 0 && "Please create a new tag."}
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }
}

export default Counter;
