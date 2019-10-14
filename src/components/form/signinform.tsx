import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import axios from 'axios';
import ErrorBoundary  from '../errorboundary/errorboundary';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please Enter your Username') .max(255,'Must be shorter than 255').required('Enter Username'),
  pass: Yup.string().required('Please Enter your Password').test(
    "regex",
    "Password must be min 8 characters, 1 Uppercase, 1 Number and 1 Lowercase",
    //https://stackoverflow.com/questions/55451304/formik-yup-password-strength-validation-with-react
    val => {
      let regExp = new RegExp(
        "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
      );
      console.log(regExp.test(val), regExp, val);
      return regExp.test(val);
    }
  });

export class Signinform extends React.Component {
  state = {
    token: '',
    logout_token: '',
    username: '',
    pass: ''
  };

  componentDidMount() {
    try {
      let token = sessionStorage.getItem('WEBUPPS_TOKEN');
            token = JSON.parse(token);
      let logout_token = sessionStorage.getItem('WEBUPPS_LOGOUT_TOKEN');
          logout_token = JSON.parse(logout_token);

      if(token) {
          this.setState(()=> ({ 
            token: token, 
            logout_token: logout_token, 
           }))
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevState.token.length !== this.state.token.length){
        const token = JSON.stringify(this.state.token)
        const logout_token = JSON.stringify(this.state.logout_token);
        window.sessionStorage.setItem('WEBUPPS_TOKEN', token);
        window.sessionStorage.setItem('WEBUPPS_LOGOUT_TOKEN', logout_token);
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
          //initialValues= {{username: '', pass: ''}}
          initialValues= {this.state}
          onSubmit={(values, {setSubmitting}) =>{

              let username = this.state.username;
              let pass = this.state.pass;
              
              username = values.username;
              pass = values.pass;

              this.setState({
                username: username,
                pass: pass
              });

              const data = {
                name: this.state.username,
                pass: this.state.pass
              }

              axios.post('http://3.94.126.80/user/login?_format=hal_json', data).then((response)=> {
              this.setState(()=>({
                token: response.data.csrf_token,
                logout_token: response.data.logout_token
              }))
              setSubmitting{false}
              }).catch((e)=>{ 
                console.log(e);
              }) 

             
  
              setTimeout(()=>{
                console.log(values);
                console.log(this.state);
                values.username = '';
                values.pass = '';
                this.setState({
                  username: values.username ,
                  pass: values.pass
                })
                console.log(values);
                console.log(this.state);
                setSubmitting(false)
              }, 5000);
            }
          }
          /* //Default Formik Validation
          validate={(values) =>{
            let errors = {}
            if(!values.username){
              errors.username = 'Please enter a name';
            }
            if(!values.pass){
              errors.pass = 'Please enter a pass';
              return errors;
            }
          } */
          validationSchema={validationSchema}

          /*const data= {
              name: values.username,
              pass: values.pass
            }
            axios.post('http://3.94.126.80/user/login?_format=hal_json', data).then((response)=> {
              this.setState(()=>({
                token: response.data.csrf_token
              }))
              setSubmitting{false}
            }).catch((e)=>{ }) */

          
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
                <label htmlFor="pass">Password</label>
                <input
                  onChange={handleChange}
                  value={values.pass}
                  type="password"
                  name="pass"
                  placeholder="Enter Password"
                  onBlur={handleBlur}
                />
                {
                  <div style={{color: 'red'}}>
                    <ErrorMessage name="pass"></ErrorMessage>
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