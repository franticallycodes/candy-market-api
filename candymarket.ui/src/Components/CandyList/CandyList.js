import React from 'react';

import candyRequests from '../../DataRequests/CandyRequests';

class CandyList extends React.Component {

  state = {
    candy: []
  }


  componentDidMount(){
    candyRequests.getAllCandy().then(data => {

      let allCandy = [...data];
      this.setState({candy: allCandy});
      
    })
  }

  showAllCandy = () => {
    const allCandy = [...this.state.candy];

    return allCandy.map(value => <div>{value.name}</div>);
  }

  render() {
    return (
      <div>
        {this.showAllCandy()}
      </div>
    );
  }
}

export default CandyList;