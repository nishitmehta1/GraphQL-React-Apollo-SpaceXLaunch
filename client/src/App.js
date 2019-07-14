import React, { Component } from 'react';
import logo from './components/logo.png';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launch from './components/Launches';
import SingleLaunch from './components/SingleLaunch';

const client = new ApolloClient({
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className='container'>
            <img
              src={logo}
              alt='SpaceX'
              style={{ width: 300, display: 'block', margin: 'auto' }}
            />
            <Route exact path='/' component={Launch} />
            <Route
              exact
              path='/launch/:flight_number'
              component={SingleLaunch}
            />
            {/* <Launch /> */}
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
