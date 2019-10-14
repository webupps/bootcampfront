import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import ErrorBoundary  from '../errorboundary/errorboundary';

export class Signinform extends React.Component {
  state = {
    token: [],
    username: '',
    password: ''
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('token')
      const token = JSON.parse(json)

      if(token) {
          this.setState(()=> ({ token }))
      }
  } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevState.token.length !== this.state.token.length){
        const json = JSON.stringify(this.state.token)
        localStorage.setItem('token', json)
    }
  }

  /*postDataHandler = ()=> { 
    axios.post('http://3.94.126.80/user/login', );
  } */
  //https://jaredpalmer.com/formik/docs/guides/form-submission


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
            /*const data= {
              name: values.username,
              pass: values.password
            }
            axios.post('http://3.94.126.80/user/login?_format=hal_json', data).then((response)=> {
              this.setState(()=>({
                token: response.data.csrf_token
              }))
              setSubmitting{false}
            }).catch((e)=>{ }) */
            }
          }

          

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