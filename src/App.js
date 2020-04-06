import React, { Component }  from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont.js';
import store from './store/index.js';
import { Provider } from 'react-redux';


import { BrowserRouter, Route } from 'react-router-dom'; 

import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
    	   
    	
        	<GlobalStyle />
         	<BrowserRouter>
            <Header />
                <Route path='/' exact component={Home}></Route>
                <Route path='/detail/:id' exact component={Detail}></Route>

            </BrowserRouter>
         	<GlobalIcon />  
            
    	</Provider>
     	
    )
  }
}

export default App;
