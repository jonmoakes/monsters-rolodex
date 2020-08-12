import React from 'react';
import './App.css';

import MonsterListContainer from "./components/monster-list-container/monster-list-container.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends React.Component {

  constructor() {
      super();

      this.state = {
        monsters: [],
        searchField: ''
      };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then(response => response.json()) 
    .then(users => this.setState({monsters: users})); 
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const { monsters, searchField } = this.state; // destructure from the state - use the same names. Set them to constants.
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())  // create a new variable that gets the monsters state and filters over it ( which gets a new array ) and checks to see if an individual monster name contains what the searchfierld includes when typed. tolowercase in case user uses capitals.
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          // giving the searchbox component itself ( the component file ) 2 props called placeholder and handleChange and giving them values or functions etc. These can then be used in the searchbox component.jsx file itself where we would destructure them.
          placeholder='search monsters'  
          handleChange={this.handleChange}
        />
        <MonsterListContainer monsters={filteredMonsters}/>   
      </div>
    );
  }
}

export default App;
