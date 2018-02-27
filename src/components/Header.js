import React, { Component } from 'react';
import logo from '.././logo.png';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="homeis-header">
            <img src={logo} className="homeis-logo" alt="logo" />
            <ul className="homeis-menu">
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Blog</a></li>
                <li><a role="button">Download</a></li>
            </ul>
        </header>
    );
  }
}

export default Header;
