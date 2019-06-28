import React, { Component } from 'react'

export default class Home extends Component {

    constructor(){
        super()

        this.state = {
            age : 0
        }
    }


    increteAge = () => {
        this.setState((prevState) => {
            return {
                age: prevState.age + 1
            }
        })
    }

    decreteAge = () => {
        this.setState((prevState) => {
            return {
                age: prevState.age - 1
            }
        })
    }


    render() {
        return (
            <div>
                <h3>อายุของ คุณ : {this.state.age}</h3>
                <button className="button is-primary is-rounded" onClick={this.increteAge}>+คบิกบวกอายุ</button>
                <button className="button is-rounded" onClick={this.decreteAge}>-คลิกลบอายุ</button>
            </div>
        )
    }
}
