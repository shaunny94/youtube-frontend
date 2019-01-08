import React, { Component } from 'react';
import './SearchBar.css';
import axios from 'axios';



class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {url: ""} ;
        
      }

  handleSubmit = (e) => {
    axios.post("http://127.0.0.1:8900/search",
     this.state)
    .then(res => {
      console.log(res);
    })
  }

  handleInputChange = (e) => {
    this.setState({keywords: e.target.value});
    console.log(e.target.value)
 }


  render() {
    return (
    <div id="wrap">
        <form onSubmit={this.handleSubmit} autoComplete="on">
           <input onChange={this.handleInputChange} id="search" name="search" type="text" placeholder="What're we looking for ?" /><input id="search_submit" value={this.state} type="submit" />
        </form>
    </div>
     );
  }
}

export default SearchBar;