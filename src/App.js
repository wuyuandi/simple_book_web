import React, { Component }  from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont.js';
import store from './store/index.js';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (

    	<div>
    	<Provider store={store}>
    	<GlobalStyle />
     	<Header />
     	<GlobalIcon />  
    	</Provider>
     	</div>
    )
  }
}

export default App;
