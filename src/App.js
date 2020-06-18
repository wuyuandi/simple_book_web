/*
 * @Author: your name
 * @Date: 2020-06-08 16:49:08
 * @LastEditTime: 2020-06-17 19:00:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /simple_book_web/src/App.js
 */ 
import React, { Component }  from 'react';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont.js';
import store from './store/index.js';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 


import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import NoMatch from './pages/nomatch/index.js';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <GlobalStyle />
         	<BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail/:id'  component={Detail}></Route>
                <Route path='/login'  component={Login}></Route>
                <Route path='/write'  component={Write}></Route>
                <Route component={NoMatch}></Route>
            </Switch>
            </BrowserRouter>
         	<GlobalIcon />  
            
    	</Provider>
     	
    )
  }
}

export default App;
