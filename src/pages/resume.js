import React from "react";
import { Link } from "react-router-dom";

function Resume(){
    return( <>
            <p>here's my resume!</p>
            <iframe frameborder="0" scrolling="no"
                width="640" height="480"
                src="Rohrer-Resume-2021.pdf">
            </iframe>
                </>);
}

export default Resume;