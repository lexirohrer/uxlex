import React from "react";
import '../App.css';
import { Document } from 'react-pdf'

function Resume(){
    return( <div class="resume">
            <p>check out my relevant experience below,
            <a href="/Rohrer-Resume-2021.pdf" download> or download it here.</a>
            </p>
            {/* <iframe src="file://c:\Rohrer-Resume-2021.pdf" height="90%" width="90%"></iframe> */}
            <iframe src="https://drive.google.com/file/d/10-hEfpm21SV0vdc4NooLeNud8TZ_Zqqx/preview?usp=embed_googleplus" height="1100rem" width="1000rem" allowFullScreen></iframe>
            {/* <Document file="Rohrer-Resume-2021.pdf" /> */}
            {/* <img src="./Rohrer-Resume-2021.jpg" alt=''></img> */}
        </div>);
}

export default Resume;