import React from 'react';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';

import Home from '../Home/Home';
import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  // props contains Location, Match, and History
  const routeChecker = props => (authed === false ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/home', state: { from: props.location } }} />);
  return <Route render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  // props contains Location, Match, and History
  const routeChecker = props => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: true,
    testText: "This text is to make sure you can pass other props from App to your child components. You can delete this."
  };

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const authed = this.state.authed;
    const testText = this.state.testText;
    return (
      <div className="App">
        <Router>
            <Switch>
              {/* <PublicRoute path="/auth" component={Auth} authed={authed} /> */}
              <PrivateRoute path="/" exact component={Home} authed={authed} testText={testText}/>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;