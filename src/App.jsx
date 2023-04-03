import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from 'react-router-dom';
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
          <Nav className="justify-content-center fixed-top" bg="dark" justify variant="tabs" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link as={Link} eventKey="/" to="/" className="navCombat">Combat</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="/skills" to="/skills">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} eventKey="/edit" to="/edit">Edit</Nav.Link>
            </Nav.Item>
          </Nav>
          <Routes>
            <Route path="/" element={<Combat />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/edit" element={<Edit />}></Route>
            <Route path="*" element={<Combat />} />
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

export const Roll = async (test) => {
  console.log(test);
  let rollText = test;

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

  await chrome.scripting.executeScript({
    target: {tabId: tab.id},
    args:[{rollText}],
    func: vars => Object.assign(self, vars),
  }, () => {
    chrome.scripting.executeScript({
      target: {tabId:  tab.id
    }, files:['content_script.js']});
    });
  }


  // //Eneter to textbox and click enter
  // var textarea = document.querySelector('textarea[title="Text Chat Input"]');
  // textarea.value = test;
  // var sendbtn = document.getElementById("chatSendBtn");
  // sendbtn.click();
  // console.log(textarea);



export default App
