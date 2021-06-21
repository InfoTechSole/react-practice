import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // Using 'Object Destructuring'
    let { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button className="btn btn-primary m-2 btn-sm" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            // This component is not handling these events, instead its bubbling to its parent
            onDelete={onDelete}
            onIncrement={onIncrement}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
