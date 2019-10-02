import React, { Component } from 'react';


export class Header extends React.Component {

  render () {
   
    return (
        <header className="header row">
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/bootcamp">Bootcamp</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/login">Login</a>
              </li>
            </ul>
          </nav>
        </header>
    );

  }
}
