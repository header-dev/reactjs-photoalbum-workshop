import React from 'react'
import { Link } from 'react-router';

const logos = 'https://bulma.io/images/bulma-logo.png'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src={logos} style={{ width:112, height: 28 }} alt="Logo" />
                </Link>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">Home</Link>
                    <Link to="/user" className="navbar-item">Photo</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;