import './App.css';
import Google from './Google'
import React from 'react';
import FacebookLoginWithButton from 'react-facebook-login';
import GoogleLoginButton from 'react-social-login-buttons'
class App extends React.Component {
    
  render() {
    return (

      <>
      
      <div className="bbt">
      <Google/>
         </div>
       
       
      </>
      
      
    )
  }
}

export default App