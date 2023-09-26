import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {

  constructor() {
		super();
		// console.log("App constructor");

		this.state = {
			mode : 'light'
		}

	}

  render() {
    return (

          <div>
                <NavBar mode={this.state.mode}/>
                <News className="mx-2" mode={this.state.mode} pageSize={20} country="in" category="sports"/>
          </div>
      
        )
  }
}

