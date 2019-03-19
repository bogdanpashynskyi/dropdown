import React, { Component } from 'react';

import './App.css';
import Dropdown from './Dropdown';

const config = [
  {id: 1, text: "Dropdown"},
  {id: 2, text: "Preview"},
  {id: 3, text: "Rename"},
  {id: 4, text: "Delete"},
  {id: 5, text: "Separate link", details: "separate-link"},
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
