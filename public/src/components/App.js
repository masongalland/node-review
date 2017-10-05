import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";

import { getUsers, getUserById, deleteUserById } from "../services/userService";
import User from "./User";
import Input from "./Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: "",
      term: "",
      id: "",
      category: "Get Users By Query",
      users: []
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
  }

  handleSelect(value) {
    this.setState({
      select: value
    });
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
    getUsers(category, term).then(response => {
      this.setState({
        users: response
      });
    });
  }
  handleGetDelete(getDelete, id) {
    if (getDelete === "get") {
      getUserById(id).then(response => {
        this.setState({
          users: response
        });
      });
    } else if (getDelete === "delete") {
      deleteUserById(id).then(response => {
        this.setState({
          users: response
        });
      });
    }
  }

  render() {
    console.log(this.state.category);
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
          onChange={e => this.handleCategory(e.target.value)}
          value={this.state.category}
          className="top-select"
        >
          <option value={"Get Users by Query"}>Get Users By Query</option>
          <option value={"Get/Delete User by ID"}>Get/Delete User by ID</option>
        </select>

        {this.state.category === "Get Users by Query" ? (
          <Input
            selectValue={this.state.select}
            handleSelect={this.handleSelect}
            term={this.state.term}
            handleTerm={this.handleTerm}
            handleClick={this.handleGetDelete}
            options={["make", "letter", "year"]}
            button="Search"
          />
        ) : (
          <Input
            selectValue={this.state.addDelete}
            handleSelect={this.handleSelect}
            term={this.state.term}
            handleTerm={this.handleTerm}
            handleClick={this.handleSearch}
            options={["get", "delete"]}
            button="Get/Delete"
          />
        )}
        {users}
      </div>
    );
  }
}

export default App;
