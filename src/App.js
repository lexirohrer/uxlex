// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Hello from './pages/hello';
import Projects from './pages/projects';
import Resume from './pages/resume';
import { useState } from 'react';
import Burger from './Burger'

function App() {
  
  const [menuOpen, setMenuOpen] = useState(false)
  
  return ( <BrowserRouter>

    <div className="App">
      <div class="container">
      
      <header className="header">
        <div className="nav-title">
          <p class="title">Lexi Rohrer </p>
          <p class="subtitle"> | product design portfolio</p> 
        </div>
        
        <div className="navigation">
          <div class="burger">
            <Burger />
          </div>

          <Link to='/hello'>hello👋</Link>
          <Link to='/'>projects📱</Link>
          <Link to='/resume'>resume 🤓</Link>
          {/* put each h2 within a Link after installing react router */}
          {/* use a / in the projects one since it's a landing page */}
        
          {/* <div class="burger-menu">
          <Burger onClick={(menuOpen)=> setMenuOpen(true)} />
          <Link to='/hello'>hello👋</Link>
          <Link to='/'>projects📱</Link>
          <Link to='/resume'>resume 🤓</Link>
          </div> */}
          
        </div>       

        </header>

        {/* put switch tag here as we did in class with different routes */}
        <Switch>
          <Route path="/hello">
            <Hello />
          </Route>
          <Route exact path="/">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
        </Switch>
        
        
    
      <div class="shape-blob"></div>
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
