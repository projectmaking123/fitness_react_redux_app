import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">

          <PostForm />
          <Posts />
      
        </div>
      </Provider>
    );
  }
}

export default App;
