import './projects.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import Hello from './pages/hello';
import Quickbooks from './quickbooks';
import Typed from 'react-typed';
{/* <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script> */}

function Projects(){

    // <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.min.js"></script>

    var options = {
        strings: ['First test sentence.', 'second test sentence'],
        typeSpeed: 40
      };
      
    //   <span id="typed"> </span>
      
    //   var typed = new Typed('.element', options);


    return( <>
    <div class ='project-page'>

        <div class="typed-words">
            <p>Hey hey! You can call me Lexi.</p>
            <p>I'm a senior at the University of Washington studying Human Centered Design and Engineering</p>
            <span style={{display: "inline"}}>Very into:</span>
            <Typed
                strings={["patterned pants", "cooking without a recipie", "sunrise hikes", "a good cuppa tea ☕","value driven design"]}
                typeSpeed={55}
                backSpeed={50}
                backDelay={900}
                startDelay={500}
                loop={true}
                loopCount={Infinity}
            />
            <br/>
        </div>

        {/* <div className="navigation">
          <Link to='/quickbooks'>hello👋</Link>
           <Link to='/'>projects📱</Link>
          <Link to='/resume'>resume 🤓</Link>
          
        </div>        */}


        {/* Intuit QuickBooks */}
        <Link to='/quickbooks'>
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
       </Link> 

        {/* Harvest */}
        <div class ="project">
            <img src="harvest-header.png" alt=''></img>
            <div class="project-text">
                <h2>class project | 15 minute read</h2>
                <h1>harvest app design</h1>
                <ul>
                    <li>Worked with a four person design team over ten weeks to conduct research for and design an app for farmers market frequenters </li>
                    <li>Explored each step of the user centered design process, culminating in a high fidelity prototype</li>
            </ul>
            </div>
        </div>
        
        {/* WTA Rebrand */}
        <div class ="project">
            <img src="wta-header.png" alt=''></img>
            <div class="project-text">
                <h2>class project | 10 minute read</h2>
                <h1>WTA rebrand and app design</h1>
                <ul>
                    <li>Conducted an audit of the Washington Trails Association brand, website, and app</li>
                    <li>Redesigned communication strategy, visual brand, and UI flows culminating in a high fidelity app prototype and brand guide book</li>
            </ul>
            </div>
        </div>


        {/* put switch tag here as we did in class with different routes */}
        <Switch>
          <Route path="/quickbooks">
            <QuickBooks />
          </Route>
          {/* <Route exact path="/">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route> */}
        </Switch>
    </div>
       

    </>);
}

export default Projects;
       