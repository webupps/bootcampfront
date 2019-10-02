import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Header extends React.Component {

  render () {
   
    return (
        <header className="header row">
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bootcamp">Bootcamp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>
    );

  }
}
