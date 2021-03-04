import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function App() {
  return ( <BrowserRouter>
    <div className="App">
      <div class="container">
      
      <header className="header">
        <div className="nav-title">
          <h1>Lexi Rohrer </h1>
          <h2> | product design portfolio</h2> 
        </div>
        
        <div className="navigation">
          <Link to='hello'><h2> hello 👋</h2></Link>
          <Link to='/'><h2>projects📱</h2></Link>
          <Link to='resume'><h2>resume 🤓</h2></Link>
          {/* put each h2 within a Link after installing react router */}
          {/* use a / in the projects one since it's a landing page */}
        </div>
        </header>

        {/* put switch tag here as we did in class with different routes */}
        <Switch>
        <Route path="/hello">
          <Hello /> 
          {/*  create new file and return the html from it above*/}
        </Route>
        <Route path="/" exact>
          <Projects />
        </Route>
        {/* <Route path="/resume" exact>
          <Resume />
        </Route> */}
      </Switch>

    </BrowserRouter>

      <div class ="project">
        <img src="intuit-header.jpg" alt=''></img>
        <div class="project-text">
          <h2>internship | 15 minute read</h2>
          <h1>Quickbooks mobile web redesign</h1>
          <ul>
            <li>Redesigned three areas of QuickBooks mobile web, increasing trial-to-sub conversion 3 percentage points and mobile web signup to retention 5.7 percentage points</li>
            <li>Championed mobile first design in cross functional conversations and weekly critiques</li>
          </ul>
        </div>
      </div>

      <div class="shape-blob"></div>
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
      </div>

    </div>
  );
}

export default App;
