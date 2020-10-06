import React, {Component, Fragment} from 'react';
import styled from "styled-components"; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import MyCarrier from './components/views/MyCarrier/MyCarrier';
const btnStyle = {
  color: "white",
  background: "grey",
  padding: ".375rem .75rem",
  border: "1px solid teal",
  borderRadius: ".25rem",
  fontSize: "1rem",
  lineHeight: 1.5,
}
// class App extends React.Component{
//   render(){
//     return <Container></Container>;
//   }
// }
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080);
  background-size: cover;
`;
const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  border: '1px solid white';
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;
function App() {
    return (
    <Container>
    <Router>
      <ul>
      <div style={{border: '1px solid white',}}>
      <h1 style={{color:'white'}}>Page of lhw</h1>
      <header>
        <Link to="/">
          <button style={btnStyle}>메인 화면</button>
        </Link>
        <Link to="/Carrier">
          <button style={btnStyle}>이력</button>
        </Link>
        <Link to="/Register">
          <button style={btnStyle}>유용한 Link</button>
        </Link>
        <Link to="/login">
          <button style={btnStyle}>로그인 페이지 연습</button>
        </Link>
      </header>
      </div>
      </ul>
        <div>

          <Switch>
            <Route exact path="/carrier" component={MyCarrier} />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </div>
      </Router>
      </Container>
    )
}

export default App;