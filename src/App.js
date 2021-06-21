import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

// In 'MOUNT' lifecycle hook, we have 3 lifecycle hooks
// e.g 'constructor', 'render' and 'componentDidMount'
// React call these in order

// In 'UPDATE' lifecycle hook, we have 2 lifecycle hooks
// e.g 'render' and 'componentDidUpdate'

// Last phase is 'UNMOUNT', in this phase, component will be removed from the DOM
// e.g 'componentWillUnmount'

// There are few more hooks but those are very rarely used

// => First of all, Constructor of App component will be called then 'App' component and 'all its children' are rendered recursively
// => Finaly, our App is mounted and is in the DOM

class App extends Component {
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
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters]; // Using spread operator '...' to clone the array of objects (ES6 feature)
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // Spread operator to clone single object
    counters[index].value--;
    this.setState({ counters });
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
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          {/* Now 'Counters' is a controlled component because its not modifying any data */}
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={counter => this.handleIncrement(counter)}
            onDecrement={counter => this.handleDecrement(counter)}
            onDelete={counterId => this.handleDelete(counterId)}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
