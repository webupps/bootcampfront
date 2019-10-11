import React, { Component } from 'react';
import { Header } from '../layout/header/header'; 
import { Mainlogin} from '../layout/main/mainlogin';
import { Footer } from '../layout/footer/footer';
export class Login extends React.Component {

  render () {
   
    return (
      <div className="login layout container">
        <Header></Header>
          <Mainlogin></Mainlogin>
        <Footer></Footer>
      </div>
    );

  }
}