import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    state = { age : 0 }
    render() {
        return (
            <div>
                <h3>อายุของคุณ : {this.props.age} ปี</h3>
                <button className="button is-primary" onClick={this.props.increteAge}>+คลิกบวกอายุ</button>
                <button className="button is-danger" onClick={this.props.decreteAge}>-คลิกลบอายุ</button>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        age: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increteAge: () => {
            dispatch({type: 'INCREMENT'})
        },
        decreteAge: () => {
            dispatch({type: 'DECREMENT'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)