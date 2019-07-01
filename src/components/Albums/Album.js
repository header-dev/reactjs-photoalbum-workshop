import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Album extends Component {
    render() {
        const { data } = this.props
        return (
            <div>
                <Link to={`/photo/${data.id}/${data.title}`}>{data.title}</Link>
            </div>
        )
    }
}
