import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Navbar from './component/navbar/NavBar';
import Search from './component/search/Search';

class App extends Component {
  render() {
    return(
    <MuiThemeProvider>
    <div>
       <Navbar/>
       <Search/> 
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
