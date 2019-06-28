import React, { Component } from 'react'
import logo from '../logo.svg'
import 'bulma/css/bulma.css'
import Header from '../components/Header'


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <div className="container">
            <div className="content">
              {this.props.children}
            </div>
          </div>
      </div>
    )
  }
}
