import React, { Component } from 'react';
import { Formik } from 'formik';
import ErrorBoundary  from '../errorboundary/errorboundary';

export class Signinform extends React.Component {

  render () {
   
    return (
      
      <div className="signinform">
          <Formik 
          initialValues= {{username: '', password: ''}}
          onSubmit={(values, {setSubmitting}) =>{
            
            setTimeout(()=>{
              console.log(values);
              values.username = '';
              values.password = '';
              console.log(values);
              setSubmitting(false)
            }, 5000)
          }}
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
          >
            {({handleSubmit, handleChange, values, errors, handleBlur, touched, isSubmitting}) => (
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
                          { errors.username }
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
                          { errors.password }
                        </div>
                      } 
                    </div>
                    
                    <button disabled={isSubmitting} type="submit">
                      Submit
                    </button>
                    
                    
                  </form>
              )
              }
            
          </Formik>
      </div>
    );

  }
}