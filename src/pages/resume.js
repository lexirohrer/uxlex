import React, { useState } from 'react';
import '../App.css';
import { Document } from 'react-pdf'
import pdfFile from "./Rohrer-Resume-2021.pdf"

function Resume(){

    // const [file, setFile] = useState(pdfFile);
    return( <div class="resume">
            <p>check out my relevant experience below,
            <a href="/Rohrer-Resume-2021.pdf" download> or download it here.</a>
            </p>
            {/* <iframe src="file://c:\Rohrer-Resume-2021.pdf" height="90%" width="90%"></iframe> */}
            <iframe src="https://drive.google.com/file/d/10-hEfpm21SV0vdc4NooLeNud8TZ_Zqqx/preview?usp=embed_googleplus" height="1100rem" width="1000rem" allowFullScreen></iframe>
            {/* <Document file={file}></Document> */}
            {/* <img src="./Rohrer-Resume-2021.jpg" alt=''></img> */}
        </div>);
}

export default Resume;