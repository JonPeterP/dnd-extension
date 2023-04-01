import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div class="container">
        <Nav className="justify-content-center " bg="dark" justify variant="tabs" defaultActiveKey="/combat">
          <Nav.Item>
            <Nav.Link href="/combat">Combat</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/edit">Edit</Nav.Link>
          </Nav.Item>
        </Nav>

        <h1>DnD Test</h1>
      </div>
    </div>
  )
}

function Roll() {
  var textarea = document.querySelector('textarea[title="Text Chat Input"]');
  textarea.value = "Testing";
  var sendbtn = document.getElementById("chatSendBtn");
  sendbtn.click();
  console.log(textarea);
}

export default App
