import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {

  render () {
    const testText = this.props.testText;
    return (
      <div className="Home">
          <h1 className="testTarget">{testText}</h1>
      </div>
    );
  }
}

export default Home;