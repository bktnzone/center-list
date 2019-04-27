import React, { Component } from 'react';
import NavBar from './components/NavBar'
import CentreList from './components/CentreList'
import client from './ServiceClient';
import './App.css';

class App extends Component {
  state = {
    centres: [],
    isLoaded: false,
  };
  constructor(props) {
    super(props);

  }

   componentDidMount=async () =>{

    let centreList= await  client.getCentres();
    this.setState({centres:centreList,isLoaded:true});

  }

  render() {

    const {centres,isLoaded}=this.state;
    return (
      <div>
        <NavBar />
          { isLoaded &&
          <CentreList centres={centres} /> }

      </div>
    );
  }
}

export default App;
