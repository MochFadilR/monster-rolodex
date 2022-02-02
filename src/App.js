import react, { Component } from 'react';

import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box'


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  render() {

    const { monsters, searchField } = this.state
    const filteredMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={q => this.setState({ searchField: q.target.value })}/>
        <CardList monsters={filteredMonster}/>
      </div>
    )
  }
}

export default App;
