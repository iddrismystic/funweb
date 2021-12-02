import React from 'react';
import Footer from '../components/Footer';
import  Head  from 'next/head';
function Gettingstarted() {
    const cdn = {
        csscompiled:`
        <!-- Compiled and minified css -->
        `,   
        css:`
        <link rel="stylesheet" href="https://funtechs.github.io/Funcss/fun.css"/>
        `
    }
    return (
        <section>

          <Head>
            <title>Funcss Getting Started</title>
          <meta name='description' content='
        Getting started with funcss framework, download the funcss framework
        for free and begin creating your dream projects.
    ' />
    <meta
    name="keywords"
    content="fun, css, download, frame work"
    />
          </Head>
                        <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding height-200 content-middle light">
     <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6"></div>
             </div>
             <div className="section">
               <a href="#cdn" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">CDN</div></a>
               <a href="#downloadzip" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Download Zip</div></a>
               <a href="#githubcli" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Github CLI</div></a>
               <a href="#ssh" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">SSH</div></a>
               <a href="#https" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">HTTPS</div></a>
  
             </div>
            </div>
                <div className="main-content">
                <div className="container">
             <h1 className="text-big text-lighter text-indigo header">
                 Getting Started
             </h1>
             <div className="h4">
               Download the funcss framework to start creating awesome responsive website for free.
             </div>
             <div className="section hr"></div>
            </div>

     
            <div className="container" id="cdn">
             <div className="header-2 text-indigo">
                 Using CDN
             </div>
             <div className="body-1">
               You can start using Fun css by coping the CDN and paste it in your head tag.
             </div>
             <div className="note">
               <div className="note-title">Note</div>
               <div>
                   You can use the CDN for development mode, test purposes and learning.
                   It is not recommended to use the CDN for production purpose. Download and use
                   the fun css files for production mode.

               </div>
               </div>

               <div>
               <div className="code padding-top-50">
                 <div className="monospace ">{cdn.csscompiled}</div>
                 <div className="monospace section ">{cdn.css}</div>

               </div>
               </div>
    
    </div>

    <div className="container" id="downloadzip">
      <div className="header-2 text-indigo">
            Download 
     </div>
<div className="text-small">
You can use the link below to download our framework files or you can clone the git repo. It is recommended to use the downloaded files 
when creating a website or web application for production purpose.
</div>

<div>
   <a href="https://codeload.github.com/funtechs/Funcss/zip/refs/heads/main">
   <button className="button text-white hover-up margin-top-20 card indigo ripple">
     Download Fun Css
     <span className="animate-up-down margin-left-10"><i className="fas fa-download"></i></span>
  </button> 
   </a>
</div>
  

<div className="padding-top-20" id="githubcli">

<div className="header-2 text-indigo">Clone The Framework</div>
<div>
<div className="text-large">Github CLI:</div>
<div className="code">
<xmp>
gh repo clone funtechs/Funcss
</xmp>
</div>   
</div>

<div id="ssh">
<div className="text-large">SSH:</div>
<div className="code">
<xmp>git@github.com:funtechs/Funcss.git</xmp>
</div>   
</div>

<div id="https">
<div className="text-large">HTTPS:</div>
<div className="code">
<xmp>https://github.com/funtechs/Funcss.git</xmp>
</div>   
</div>

</div>

</div>
   {/* <div className="container">
     <div className="row">
       <div className="col sm-12 md-6 lg-6">
         <div className="row-flex success padding roud-edge text-white">
           <div className="margin-right-10"><i className="fas fa-check text-indigo"></i></div>
           <div>
             <div className="h3">Simple classNamees</div>
             <div className="opacity-4">
            santium ex assumenda dolore. Quis similique fugiat, est eius delectus quae?
             </div>
           </div>
         </div>
       </div>
       <div className="col sm-12 md-6 lg-6"></div>
     </div>
   </div> */}
   <Footer />

                </div>

              </div>
    </section>


        
    );
}

export default Gettingstarted;