import React from 'react';

import candyRequests from '../../DataRequests/CandyRequests';

class CandyList extends React.Component {

  state = {
    candy: []
  }


  componentDidMount(){
    candyRequests.getAllCandy().then(data => {
      console.log(data);
      let allCandy = [...data];
      this.setState({candy: allCandy});
      
    })
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default CandyList;