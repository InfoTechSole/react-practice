import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // Using 'Object Destructuring'
    let { counters, onReset, onDelete, onIncrement, onDecrement } = this.props;

    return (
      <div>
        <button className="btn btn-primary m-2 btn-sm" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            // This component is not handling these events, instead its bubbling to its parent
            onDelete={() => onDelete(counter.id)}
            onIncrement={() => onIncrement(counter)}
            onDecrement={() => onDecrement(counter)}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
