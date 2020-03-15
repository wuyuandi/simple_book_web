import React, { Component }  from 'react';
import Header from './common/header';
import { GlobalStyle } from './style.js'
import { GlobalIcon } from './statics/iconfont/iconfont.js'

class App extends Component {
  render() {
    return (
    	<div>
    	<GlobalStyle />
     	<Header />
     	<GlobalIcon />  
    
     	</div>
    )
  }
}

export default App;
