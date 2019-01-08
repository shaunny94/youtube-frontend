import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './components/SearchBar';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {value: ""} ;
    
  }

  

  render() {
    return (
     <SearchBar />
    );
  }
}

export default App;
