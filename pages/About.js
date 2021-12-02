import React from 'react';
import Footer from './../components/Footer';
import Image from 'next/image';

function About() {
    return (
        <section>
        <div className="content-wrapper">
     <div className="sub-content padding">
      <div className="border padding height-200 content-middle light">
      <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6">
          Ads
      </div>
      </div>
      <div className="section">
        <a href="#intro" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
        <a href="#video" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Starter Video</div></a> 
        <a href="#team" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Team</div></a>
     </div>
     </div>
         <div className="main-content">
         <div className="container">
      <h1 className="header h1 text-lighter text-indigo">
          About Funcss
      </h1>
      <div className="h4">
       Meet Our Team And <br /> Learn More.
      </div>

      <div className="section hr">

      </div>
     </div>

<div className="container" id="intro">
    <h1 className="no-margin text-lighter h2 text-indigo">Fun Css</h1>
    <div className="note">
    Fun responsive css framework was developed to ease your work in developing websites and 
    webpages. It comes with pre-defined classes that you can use for your projects. You can also 
    download our templates for free and use them to create standard websites.
</div>

<div>
    <video src="/video/colors.mp4" controls className="responsive section" id="video"></video>
</div>
</div>

<div className="container padding-top-40">
<h1 className="no-margin text-lighter h2 text-indigo padding-bottom-30" id="team">Meet The Team</h1>
<div className="note">
    Meet the developers who contributed for the success of this project.
</div>
<div className="text-small block-small  pointer hover-shadow padding">
    <div className="text-center">
        <Image src="/images/deo.jpg" width={100} height={100} className="height-100 width-100 circle" alt="iddris abdul wahab" />
    </div>
    <div className="padding">
    <h1 className="no-margin text-lighter h3">Jhon Deo</h1>
    <div>
    <i className="fas fa-check text-indigo"></i> &nbsp;
    Developer
    </div>
    <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos.
    </div>
    </div>
</div>
<div className="text-small block-small margin-top-40">
    <div className="text-center">
        <Image src="/images/jane.jpg"  width={100} height={100} className="height-100 width-100 circle" alt="Ahmed Salim" />
    </div>
    <div className="padding">
    <h1 className="no-margin text-lighter h3">Jane Deo</h1>
    <div>
    <i className="fas fa-check text-indigo"></i> &nbsp;
    Developer
    </div>
    <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos.
    </div>
    </div>
</div>
</div>


<Footer />
         </div>

         </div>
 </section>
    );
}

export default About;