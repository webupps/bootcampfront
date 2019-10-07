import React, { Component } from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          hasError: false, 
          errorMessage: ''
    };

    }
    state = {
        hasError: false,
        errorMessage: ''
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      this.setState({hasError: true, errorMessage: error});
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>{this.state.errorMessage}</h1>;
      }
  
      return this.props.children; 
    }
  }