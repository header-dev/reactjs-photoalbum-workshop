import React, { Component } from 'react'
import logo from '../logo.png'
import 'bulma/css/bulma.css'
import 'font-awesome/css/font-awesome.css'
import Header from '../components/Header/Header'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo}/>
          <div className="container">
            <div className="content">
              {this.props.children}
            </div>
          </div>
      </div>
    )
  }
}
