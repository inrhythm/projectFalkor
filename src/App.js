import React,{ Component } from 'react';
import './styles/main.scss';
import Router from './router';
import Header from './Components/header.js';

import PeoplePage from './Components/PeoplePage/PeoplePage.js'


class App extends Component {
render() {
      return (
         <div className="app">
            <PeoplePage />
         </div>
      );
   }
}

export default App;
