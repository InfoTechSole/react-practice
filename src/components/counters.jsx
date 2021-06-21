import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // Single source of truth, i.e each component has their own local state
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    console.log("Delete Clicked", counterId);
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {};

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          // key, value and id are part of the props
          <Counter
            onDelete={() => this.handleDelete(counter.id)}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
