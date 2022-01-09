import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter,
  Routes
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute} from '../util/route_util';
import NavBar from './nav_bar/nav_bar';
import SplashContent from './splash_content/splash_content';
import ContactForm from './forms/contact_form';


export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      return (<div>
                < NavBar />
                < SplashContent />
                < ContactForm />
             </div>)  
    }

}