import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // Difference between props and state?
  // Props includes data that we give to Components. PROPS ARE READONLY
  // Whereas state includes data that is local or private to that component
  // So other components can not access data directly from state

  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = () => {
    console.log("Delete Clicked");
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          // key, value and id are part of the props
          <Counter
            onDelete={this.handleDelete}
            key={counter.id}
            id={counter.id}
            value={counter.value}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
