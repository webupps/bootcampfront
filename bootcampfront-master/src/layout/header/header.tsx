import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'


export class Header extends React.Component {

  render () {
   
    return (
        <header className="header row">
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/bootcamp">Bootcamp</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </header>
    );

  }
}
