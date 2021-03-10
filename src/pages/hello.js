import React from "react";
import './hello.css';
import { Link } from "react-router-dom";

function Hello() {
    return( <>
    <div class="hello">
        <div class="intro">
            <h1>hey hey! I'm Lexi</h1>
            <h2>I'm based in Seattle, refining my skills in User Experience Design through the University of Washington’s Human Centered Design and Engineering program. I’m currently looking for full-time design opportunities for when I graduate in Spring 2021. Read on for a better sense of who I am and what I’m into.</h2>
            <h1>A bit more about me</h1>
            <h2>I grew up on the Monterey Peninsula in California just north of Big Sur, which spurred my love of hiking, running, kayaking, and the outdoors. I’ve been furthering this love through directing a women’s outdoors club at UW for the past few years - ask me about it! I love to talk about sustainability and initiatives to get people outside.</h2>
        </div>
    </div>
    
        </>);
}

export default Hello;