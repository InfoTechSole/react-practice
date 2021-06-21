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

  handleIncrement = counter => {
    const counters = [...this.state.counters]; // Using spread operator '...' to clone the array of objects (ES6 feature)
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // Spread operator to clone single object
    counters[index].value++;
    this.setState({ counters });
    console.log(this.state.counters[index]);
  };

  handleDelete = counterId => {
    let counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map(m => {
      m.value = 0;
      return m;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary m-2 btn-sm"
          onClick={() => this.handleReset()}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            onDelete={() => this.handleDelete(counter.id)}
            onIncrement={() => this.handleIncrement(counter)}
            onReset={() => this.handleReset()}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
