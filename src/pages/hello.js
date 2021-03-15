import React from "react";
import './hello.css';
import { Link } from "react-router-dom";

function Hello() {
    return( <>
    <div class="hello">
        <div class="intro">
            <h1>hey hey! I'm Lexi</h1>
            <h2>I'm based in Seattle, refining my skills in User Experience Design through the University of Washington’s Human Centered Design and Engineering program. I’m currently looking for full-time design opportunities for when I graduate in Spring 2021. Read on for a better sense of who I am and what I’m into.</h2>
            <div class="about-me">
                <h1>A bit more about me</h1>
                <img src='profile-pic.jpg' alt=''></img>
                <h2>I grew up on the Monterey Peninsula in California just north of Big Sur, which spurred my love of hiking, running, kayaking, and the outdoors. I’ve been furthering this love through directing a women’s outdoors club at UW for the past few years - ask me about it! I love to talk about sustainability and initiatives to get people outside. My family hosted 56 exchange students from 16 different countries by the time I graduated high school. This experience shaped my multicultural worldview and cultivated a lifelong love of travel.  So far, I’ve travelled to 20 countries and 21 states, and I’m always planning my next exploration.When I’m not on the move either outside or in another country, I’m usually reading or listening to a podcast — my favorite podcast is How I Built This with Guy Raz, and my favorite book is How to Win Friends and Influence People. I moved to Seattle in 2017 for the University of Washington’s Human Centered Design and Engineering program, where I fell in love with UX Design because of its interdisciplinary nature. My excitement about UX stems from its ability to be applied to any field, and I’m excited to dive into a career that spans multiple disciplines. In terms of industry experience, I’m most familiar with Interaction Design, Project Management, and User Research.Reach out at lexirohrer@gmail.com if you’d like to chat! I’m very talkative.</h2>
                {/* <h2>My family hosted 56 exchange students from 16 different countries by the time I graduated high school. This experience shaped my multicultural worldview and cultivated a lifelong love of travel.  So far, I’ve travelled to 20 countries and 21 states, and I’m always planning my next exploration.</h2>
                <h2>When I’m not on the move either outside or in another country, I’m usually reading or listening to a podcast — my favorite podcast is How I Built This with Guy Raz, and my favorite book is How to Win Friends and Influence People.</h2>
                <h2>I moved to Seattle in 2017 for the University of Washington’s Human Centered Design and Engineering program, where I fell in love with UX Design because of its interdisciplinary nature. My excitement about UX stems from its ability to be applied to any field, and I’m excited to dive into a career that spans multiple disciplines. In terms of industry experience, I’m most familiar with Interaction Design, Product Management, and User Research.</h2>
                <h2>Reach out at lexirohrer@gmail.com if you’d like to chat! I’m very talkative.</h2> */}
            </div>
            
        </div>
    </div>
    
        </>);
}

export default Hello;