import React, { Component } from 'react';

import './App.css';
import Dropdown from './Dropdown';

const config = [
  {id: 1, value: "dropdown", text: "Dropdown"},
  {id: 2, value: "preview", text: "Preview"},
  {id: 3, value: "rename", text: "Rename"},
  {id: 4, value: "delete", text: "Delete"},
  {id: 5, value: "separate-link", text: "Separate link"},
]

class App extends Component {
  state = {
    options: config,
    isOpen: false,
    selected: config[0],
  }

  handleClick = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }))
  }

  handleSelected = (id) => {
    this.setState(prevState => (
      {
        selected: prevState.options.find(item => item.id === id),
        isOpen: false,
      }
    ))
  }

  render() {
    const { options, isOpen, selected } = this.state;
    console.log(selected);
    return (
      <div className="App">
        <Dropdown
        options={options}
        isOpen={isOpen}
        selected={selected}
        handleClick={this.handleClick}
        handleSelected={this.handleSelected}
        />
      </div>
    );
  }
}

export default App;
