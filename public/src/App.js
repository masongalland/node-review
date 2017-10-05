import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { getUsers } from "./userService";
import User from "./User";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "make",
      term: "",
      users: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleCategory(value) {
    this.setState({
      category: value
    });
  }

  handleTerm(value) {
    this.setState({
      term: value
    });
  }

  handleSearch(category, term) {
    //http request
    //set users on state to the response
  }

  render() {
    console.log(this.state.term);
    let users = this.state.users.map((e, i) => {
      return (
        <User
          key={i}
          name={`${e.first_name} ${e.last_name}`}
          make={e.make}
          model={e.model}
          year={e.year}
        />
      );
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <select
          value={this.state.category}
          onChange={e => this.handleCategory(e.target.value)}
        >
          <option value="make">Make</option>
          <option value="letter">Name</option>
          <option value="year">Year</option>
        </select>
        <input
          value={this.state.term}
          onChange={e => this.handleTerm(e.target.value)}
        />
        <button
          onClick={() =>
            this.handleSearch(this.state.category, this.state.term)}
        >
          Search
        </button>
        {users}
      </div>
    );
  }
}

export default App;
