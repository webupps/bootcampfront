import React, { Component } from 'react';
import { Formik } from 'formik';
import ErrorBoundary  from '../errorboundary/errorboundary';

export class Signinform extends React.Component {

  render () {
   
    return (
      
      <div className="signinform">
          <Formik 
          initialValues= {{username: ''}}
          onSubmit={(values) =>{
            console.log(values)
          }}
          >
            {({handleSubmit, handleChange, values}) => (
                <form onSubmit={handleSubmit}>
                    <input
                      onChange={handleChange}
                      value={values.username}
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                    />
                    <button type="submit">
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