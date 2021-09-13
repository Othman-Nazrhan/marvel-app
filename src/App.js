import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import Error from './components/errorPage/error';
import welcome from './components/welcome/welcome';
import Login from './components/connect/Login';
import signup from './components/connect/signup';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import QuizOver from './components/Quiz/QuizOver';

function App() {
  
  return (
  
      <Router>
        <Header />
          <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/QuizOver" component={QuizOver} />
          <Route exact path="/welcome" component={welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={signup} />
          <Route exact path="/forget" component={ForgetPassword} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </Router>
  
  );
}

export default App;
