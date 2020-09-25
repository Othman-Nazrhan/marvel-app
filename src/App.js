import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'
import Header from './components/header/Header';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import Error from './components/errorPage/error';
import welcome from './components/welcome/welcome';
import Login from './components/connect/Login';
import signup from './components/connect/signup';
import Firebase ,{FirebaseContext} from './components/firebase'




function App() {
  return (
 <FirebaseContext.Provider value={new Firebase}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/welcome" component={welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={signup} />
        <Route component={Error} />

      </Switch>


      <Footer />
    </Router>
</FirebaseContext.Provider>
  );
}

export default App;
