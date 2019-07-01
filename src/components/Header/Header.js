import React, { Component } from 'react'
import { Link } from 'react-router';



class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            collapsed: true
        }
    }

    toggleNavbar =() => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render(){
        return (      
            <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <img src={this.props.logo}  style={{ width:112, height: 28 }} alt="Logo" />
                        <a role="button"  onClick={this.toggleNavbar}  className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </Link>
                </div>
                <div id="navbarBasicExample" className={ this.state.collapsed ? "navbar-menu" : "navbar-menu is-active" }>
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">Home</Link>
                        <Link to="/user" className="navbar-item">Photo</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;