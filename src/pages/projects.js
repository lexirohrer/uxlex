import './projects.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import Hello from './pages/hello';

function Projects(){
    return( <>
    <div class ='project-page'>
        {/* <div class ="intro">
                    Hey hey! You can call me Lexi.
                </div> */}

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
       