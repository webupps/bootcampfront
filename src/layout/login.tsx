import React, { Component } from 'react';
import { Header } from '../layout/header/header'; 
import { Signinform } from '../components/form/signinform';
import { Footer } from '../layout/footer/footer';
export class Login extends React.Component {

  render () {
   
    return (
      <div className="login layout container">
        <Header></Header>
        <Signinform>
        </Signinform>
        <Footer></Footer>
      </div>
    );

  }
}