import React, { Component } from 'react';
import './App.css';
import BlogRouter from './router'
// import { NavLink } from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'
class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <BlogRouter/>
      </Provider> 
    )
  }
}
/*
  context 跨层级的通信
*/

export default App;
