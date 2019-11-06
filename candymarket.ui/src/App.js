import React from 'react';
import logo from './logo.svg';
import './App.css';
import CandyList from './Components/CandyList/CandyList'


class App extends React.Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Words
          </p>
          <CandyList />
        </header>
      </div>
    );
  }

}


export default App;
