import './projects.css';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import Hello from './pages/hello';

function Projects(){
    return( <>
        {/* <div class ="intro">
            Hey hey! You can call me Lexi.
        </div> */}
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

    </>);
}

export default Projects;
       