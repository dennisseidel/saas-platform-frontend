import React, { Component } from 'react';
import Layout from './layouts/LandingpageLayout';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/index';
import './App.css';
import config from './config.json';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

Amplify.configure({
  Auth: {

      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      //identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
      
      // REQUIRED - Amazon Cognito Region
      region: config.region,

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
      // Required only if it's different from Amazon Cognito Region
      //identityPoolRegion: 'XX-XXXX-X',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: config.userPoolId,

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: config.userPoolWebClientId,

      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: true,

      // OPTIONAL - Configuration for cookie storage
      // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
      // cookieStorage: {
      // // REQUIRED - Cookie domain (only required if cookieStorage is provided)
      //     domain: '.yourdomain.com',
      // // OPTIONAL - Cookie path
      //     path: '/',
      // // OPTIONAL - Cookie expiration in days
      //     expires: 365,
      // // OPTIONAL - Cookie secure flag
      // // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
      //     secure: true
      // },

      // OPTIONAL - customized storage object
      //storage: new MyStorage(),
      
      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      // authenticationFlowType: 'USER_PASSWORD_AUTH'
  }
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout header={<Header/>} footer={<Footer/>}>
          <Home />
        </Layout>
      </div>
    );
  }
}

export default withAuthenticator(App);