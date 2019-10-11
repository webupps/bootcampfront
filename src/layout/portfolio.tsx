import React, { Component } from 'react';
import { Header } from '../layout/header/header';
import { Main } from '../layout/main/main';
import { Sidebar } from '../layout/sidebar/sidebar';
import { Footer } from '../layout/footer/footer';
export class Portfolio extends React.Component {

  render () {
   
    return (
      <div className="portfolio layout container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );

  }
}