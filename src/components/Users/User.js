import React, { Component } from 'react'
import { Link } from 'react-router';

export default class User extends Component {
    render() {

        const { data } = this.props

        return (
            <tr>
                <td>
                    <Link to={`/album/${data.id}/${data.name}`}>{data.name}</Link>
                </td>
            </tr>
        )
    }
}
