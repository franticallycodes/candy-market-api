import React, { Component } from 'react';

import candyData from '../../apiRequests/CandyRequests/CandyRequests';

import './Home.scss';

const defaultCandy = { Name: '' };

class Home extends Component {

  state = {
    candyNames: [],
    uCandy: defaultCandy 
  }

  getCandyNames = () => {
    //API REQUEST
    candyData.getAllCandy()
      .then((resp) => {
        let myCandy = [...resp];
        this.setState({candyNames: myCandy});
        console.error(myCandy);
      })
      .catch(err => console.error('you messed up',err));
  }

  displayCandynames = () => {
    const candy = [...this.state.candyNames]

    return (
      candy.map((candyName) =>
      <li key={candyName.id} id={candyName.name.replace(" ", "") + "liId"} className={candyName.name.replace(" ", "") + "liClass"}>
            {candyName.name}
          </li>));
  }

  addCandy = () => {
    //const nameValue = candyNameInput.value;
    console.error("nameValue");
  }

  formStateUpdate = (formName, e) => {
    const tempCandy = {...this.state.uCandy};
    tempCandy[formName] = e.target.value;
    this.setState({ uCandy: tempCandy})
  }

  nameUpdate = e => this.formStateUpdate('Name', e)

  formSubmit = (e) => {
    e.preventDefault();

    const userCandy = { ...this.state.uCandy };
    // userCandy.userId = userID

    console.log(userCandy);
    candyData.addCandy(userCandy)
      .then(this.getCandyNames())
      .catch(err => console.error("errror in formSubmit", err));
  }

  render () {
    const { uCandy } = this.state;
    const testText = this.props.testText;
    return (
      <div className="Home">
        <div className="CandyDisplayDiv">
          <h1 className="testTarget">Candy Market</h1>

          <div className="form-con">
            <form onSubmit={this.formSubmit} className="add-form">
              <div className="name">
                <label htmlFor="candyNameForm">Name:</label>
                <div className="name-form">
                  <input
                    type="text"
                    name="text"
                    className="input-area"
                    id="candyNameForm"
                    placeholder="what's your Candy's name?"
                    value={uCandy.formName}
                    onChange={this.nameUpdate}
                    required>
                  </input>
                  </div>
              </div>
              <button type="submit">Add Candy</button>
            </form>
          </div>
          <button onClick={this.getCandyNames}>Get All Candy</button>

          <ul className="CandyNameUl">
            {this.displayCandynames()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;

// {this.displayCandynames()}