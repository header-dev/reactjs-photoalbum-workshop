import React, { Component } from 'react'
import User from './User'

export default class UserList extends Component {
    render() {

        const { data } = this.props
        

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                    {data && data.map(e => {
                        return (
                            <User data={e} key={e.id} />
                        )
                    })}
                </tbody>
            </table>
        )
    }
}