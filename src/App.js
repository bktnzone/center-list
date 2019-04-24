import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CentreList from './components/CentreList'
import client from './ServiceClient';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      centres: [],
    };
  }

  componentDidMount() {
    client.getCentres().then(centreList=>{
      this.setState({centres:centreList});
    });

  }

  render() {
    return (
      <div>
        <NavBar />

        <CentreList centres={this.state.centres}/>
      </div>
    );
  }
}

export default App;
