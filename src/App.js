import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
  

function App() {
    return (
      
    <Router>
      <ul>
      <div>
      
      <header>
        <Link to="/">
          <button>메인 화면</button>
        </Link>
        <Link to="/login">
          <button>추가 화면 1</button>
        </Link>
        <Link to="/Register">
          <button>추가 화면 2</button>
        </Link>
      </header>
      </div>
      </ul>
        <div>

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </div>
      </Router>
    )
}

export default App;