import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

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
    // Now this function is not working after 'lifting state up' to app component, figour out why??
    // TODO: Figour out, how to pass arguments to 'handleIncrement' after lifting state up
    console.log(counter);
    // Above issue fixed, pass arguments from 'counters' component, where we are raising events
    const counters = [...this.state.counters]; // Using spread operator '...' to clone the array of objects (ES6 feature)
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // Spread operator to clone single object
    counters[index].value++;
    this.setState({ counters });
    console.log(this.state.counters[index]);
  };

  handleDelete = counterId => {
    // Now this function is not working after 'lifting state up' to app component, figour out why??
    // TODO: Figour out, how to pass arguments to 'handleDelete' after lifting state up
    console.log(counterId);
    // Above issue fixed, pass arguments from 'counters' component, where we are raising events
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
    console.log("this.props");
    console.log(this.props);

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
            // Following way of passing arguments is not working
            onDelete={counterId => this.handleDelete(counterId)}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
