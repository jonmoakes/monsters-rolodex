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
    const { monsters, searchField } = this.state; 
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
      )
    return (
      <div style={{textAlign:"center", width:"100%"}}>
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'  
          handleChange={this.handleChange}
        />
        <MonsterListContainer monsters={filteredMonsters}/>   
      </div>
    );
  }
}

export default App;
