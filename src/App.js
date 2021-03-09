// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Hello from './pages/hello';
import Projects from './pages/projects';
import Resume from './pages/resume';

function App() {
  return ( <BrowserRouter>
    <div className="App">
      <div class="container">
      
      <header className="header">
        <div className="nav-title">
          <p class="title">Lexi Rohrer </p>
          <p class="subtitle"> | product design portfolio</p> 
        </div>
        
        <div className="navigation">
          <Link to='/hello'>hello 👋</Link>
          <Link to='/'>projects📱</Link>
          <Link to='/resume'>resume 🤓</Link>
          {/* put each h2 within a Link after installing react router */}
          {/* use a / in the projects one since it's a landing page */}
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

      {/* <div class ="project">
        <img src="intuit-header.jpg" alt=''></img>
        <div class="project-text">
          <h2>internship | 15 minute read</h2>
          <h1>Quickbooks mobile web redesign</h1>
          <ul>
            <li>Redesigned three areas of QuickBooks mobile web, increasing trial-to-sub conversion 3 percentage points and mobile web signup to retention 5.7 percentage points</li>
            <li>Championed mobile first design in cross functional conversations and weekly critiques</li>
          </ul>
        </div>
      </div> */}

      <div class="shape-blob"></div>
      <div class="shape-blob one"></div>
      <div class="shape-blob two"></div>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
