import React, { Component } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import ErrorBoundary  from '../errorboundary/errorboundary';

export class Signinform extends React.Component {
  state = {
    token: []
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const token = JSON.parse(json)

      if(token) {
          this.setState(()=> ({ token }))
      }
  } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevState.token.length !== this.state.token.length){
        const json = JSON.stringify(this.state.token)
        localStorage.setItem('options', json)
    }
  }

  render () {
    return (
      <div className="signinform">
          <Formik 
          initialValues= {{username: '', password: ''}}
          onSubmit={(values, {setSubmitting}) =>{
            const data= {
              name: values.username,
              pass: values.password
            }
            axios.post('http://3.94.126.80/user/login?_format=hal_json', data).then((response)=> {
              this.setState(()=>({
                token: response.data.csrf_token
              }))
              setSubmitting{false}
            }).catch((e)=>{ })
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