import React, { Component } from 'react';
import { Header } from '../layout/header/header';
import { Main } from '../layout/main/main';
import { Sidebar } from '../layout/sidebar/sidebar';
import { Footer } from '../layout/footer/footer';
export class Layout extends React.Component {

  render () {
   
    return (
      <div className="layout container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );

  }
}
