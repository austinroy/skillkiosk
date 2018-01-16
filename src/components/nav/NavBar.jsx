import React, { Component } from 'react';

class NavBar extends Component {
    render(){
        return (
            <nav className="navbar is-dark" aria-label="main navigation">
            <div className="navbar-brand">
            <a className="navbar-item is-info" href="#" style={{ paddingLeft: 25  }}>
                <span className="icon has-text-danger">
                <i className="fa fa-lg fa-cart-plus icon is-large" aria-hidden="true"></i>
                </span>
                <span className="has-text-danger"> Skillkiosk </span>
            </a>
    
            <button className="button navbar-burger">
                <span></span>
                <span></span>
                <span></span>
            </button>
            </div>
    
            <div className="navbar-start">
                <a href="/" className="navbar-item">Home</a>
                <a href="/" className="navbar-item">Jobs</a>
                <a href="/upload" className="navbar-item">My Profile</a>
            </div>
        </nav>
        )
    }
}

export default NavBar;