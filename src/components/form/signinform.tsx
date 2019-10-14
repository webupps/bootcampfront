import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import ErrorBoundary  from '../errorboundary/errorboundary';

export class Signinform extends React.Component {

  /*postDataHandler = ()=> { 
    axios.post('http://3.94.126.80/user/login', );
  } */
  //https://jaredpalmer.com/formik/docs/guides/form-submission

  state = {
    username: '',
    password: ''
  }
  /*
  postDataHandler = () => {
    const post = {
        title:
    }
  }
  */
  render () {
   
    return (
      
      <div className="signinform">
          <Formik 
          //initialValues= {{username: '', password: ''}}
          initialValues= {this.state}
          onSubmit={(values, {setSubmitting}) =>{
  
              setTimeout(()=>{
                console.log(values);
                values.username = '';
                values.password = '';
                console.log(values);
                setSubmitting(false)
              }, 5000)
            }
          }
          validate={(values) =>{
            let errors = {}
            if(!values.username){
              errors.username = 'Please enter a name';
            }
            if(!values.password){
              errors.password = 'Please enter a password';
            }
            return errors;
          }}

          

          render = { ({handleSubmit, handleChange, values, errors, handleBlur, touched, isSubmitting, submitCount}) => (
            <form className=""  onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  onChange={handleChange}
                  value={values.username}
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  onBlur={handleBlur}
                />
                {
                  <div style={{color: 'red'}}>
                    <ErrorMessage name="username"></ErrorMessage>
                  </div>
                }
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={handleChange}
                  value={values.password}
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  onBlur={handleBlur}
                />
                {
                  <div style={{color: 'red'}}>
                    <ErrorMessage name="password"></ErrorMessage>
                  </div>
                } 
              </div>
              
              <button disabled={isSubmitting} type="submit">
                Submit
              </button>
            </form>
          )}
          />
      </div>
    );

  }
}