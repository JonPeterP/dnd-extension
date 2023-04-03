import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
}from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Combat from "./Pages/Combat";
import Edit from "./Pages/Edit";
import Skills from "./Pages/Skills";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {

  

  return (
    <div className="App">
      <div className="container">
        <Router>
        <Nav className="justify-content-center " bg="dark" justify variant="tabs" defaultActiveKey="/combat">
          <Nav.Item>
            <Nav.Link as={Link} to="/">Combat</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/edit">Edit</Nav.Link>
          </Nav.Item>
        </Nav>
        <Routes>
          <Route path = "/" element={<Combat/>}></Route>
          <Route path = "/skills" element={<Skills/>}></Route>
          <Route path = "/edit" element={<Edit/>}></Route>
          <Route path="*" element={<Combat/>} />
        </Routes>

        </Router>
  
      </div>
    </div>
  )
}

// function Roll(test) {
//   console.log(test);
//   console.log("button pressed");
//   /*var textarea = document.querySelector('textarea[title="Text Chat Input"]');
//   textarea.value = "Testing";
//   var sendbtn = document.getElementById("chatSendBtn");
//   sendbtn.click();
//   console.log(textarea);
//   */
// }

export const Roll = (test) =>{
  console.log(test);
}

export default App
