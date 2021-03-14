import './projects.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import Hello from './pages/hello';
import Typed from 'typed.js';
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
        {/* <div class ="intro">
                    Hey hey! You can call me Lexi.
                </div> */}
        <div class="typed-words">
            var typed = new Typed('.element', options);
        </div>


        {/* Intuit QuickBooks */}
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
    </div>
       

    </>);
}

export default Projects;
       