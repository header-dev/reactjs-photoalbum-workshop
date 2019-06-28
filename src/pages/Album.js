import React, { Component } from 'react'
import { loadAlbums } from '../actions'
import { connect } from 'react-redux';

class Album extends Component {

    componentDidMount(){
        this.props.dispatch(loadAlbums(this.props.params.userID))
    }

    render() {
        const { albums } = this.props
        if (albums.isRejected) {
            return <div>Not Load Album</div>
        }
        return (
            <div className="columns">
                <div className="column">
                    <div className="box">
                        <p className="title is-5">Album : { this.props.params.title }</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps)(Album)