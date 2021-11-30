import React from 'react';
import Footer from './../components/Footer';
import Head from 'next/head'
import Link from 'next/dist/client/link'
function Home() {
    return (
        <section className="padding-top-30">
 <Head>
 <title>Fun Css Framework</title>
 <meta name='description' content='
     Fun css framework is a modern responsive css framework for developing
     responsive websites, with free website templates you can download.
    ' />
    <meta
    name="keywords"
    content="css, framework, free website templates, themes"
    
    />
 </Head>
{/* <div class="container">
<div class="slider three">
    <div class="slide-container">
        <div class="slide">
            <div class="slide-content">
            <div class="row">
    <div class="col sm-12 md-4 lg-4 ">
    <img src="/svg/devices.svg" className="responsive" />
    </div>
    <div class="col padding sm-12 md-8 lg-8 ">
     <h1 class="montserrat no-margin">Responsive Css</h1>
     <div class="">
       Funcss is a modern responsive css framework which uses css grid to create responsive 
       website layout which best fits all kind of screen sizes.
     </div>
    </div>
    </div>
    
            </div>

        </div>
        <div class="slide">
            <div class="slide-content">
            <div class="row">
    <div class="col sm-12 md-4 lg-4 ">
      <img src="/images/13.jpg" class="round-edge responsive" />
    </div>
    <div class="col padding-20 sm-12 md-8 lg-8 ">
     <h1 class="montserrat no-margin">Reduce Coding Stress</h1>
     <div>
     Reduce your stress in coding and save time using our framework.
     Funcss come with build-in css classes, just specify the class name and funcss will do the rest for you.
     </div>
    </div>
    </div>
            </div>
        </div>
        <div class="slide">
        <div class="slide-content">
        <div class="row">
    <div class="col sm-12 md-4 lg-4 ">
      <img src="/images/14.jpg" class="round-edge responsive" />
    </div>
    <div class="col padding-20 sm-12 md-8 lg-8 ">
     <h1 class="montserrat no-margin">Free Website Templates</h1>
     <div>
    Get access to free premium themes and make your dream work
     Download and use our free website templates to ease your wok in development.
     </div>
    </div>
    </div>
        </div>
        </div>
    </div>
 
</div>
</div> */}

      <div className="container">
        <div className="row">
            <div className="col sm-12 md-6 lg-6">
             <div className="padding">
             <h1 class="h2 no-margin outfit header">
                <span class="h1 text-indigo">Fun Css:</span> Modern responsive CSS framework for developing responsive websites.</h1>
         
             </div>
             <div className="padding">
                 Funcss is a free, open source css framework for developing modern responsive
                 websites and impressive front-end applications.
             </div>
   <div class="flex">
    <div class="flex-50">
        <div class="padding">
        <Link href="/gettingstarted">
         <a>
         <button class="button width-100-p text-white indigo card ">
          Getting Started
          <i class="fas fa-angle-right margin-left-10"></i>
          </button>
         </a>
       </Link>
        </div>
  </div>
    <div class="flex-50">
        <div class="padding">
        <Link href="https://codeload.github.com/funtechs/Funcss/zip/refs/heads/main">
            <a>
            <button class="button width-100-p deep-purple card text-white">
        <i class="fas fa-download icon margin-right-10"></i> 
      Download v1.0 
        </button>         
            </a>
      </Link>
        </div>
  </div>

</div>
            </div>
            <div className="col sm-12 md-6 lg-6 padding-top-20">
                <div>
                    <video src="/video/colors.mp4" class="responsive" controls></video>
                </div>
            </div>
        </div>


      </div>

<div className="container"><div className="section hr"></div></div>

<div className="container">
<div className="text-center text-x-large text-lighter text-indigo">Our Themes</div>
<div className="text-center text-larger">Free Css Themes</div>
<div className="text-center text-medium text-lighter padding">
  Download and use our Themes for free, Build cool websites with Funcss.
</div>

<div>
    <div class="card">
        <div class="row">
            <div class="col sm-12 md-6 lg-6">
              
<div class="slider three">
    <div class="slide-container">
        <div class="slide">
            <div class="slide-content">
            <img src="/themes/1.jpg" class="responsive" alt="company theme" />
            </div>

        </div>
        <div class="slide">
            <div class="slide-content">
            <img src="/themes/2.jpg" class="responsive" alt="company theme" />
            </div>
        </div>
        <div class="slide">
        <div class="slide-content">
        <img src="/themes/3.jpg" class="responsive" alt="company theme" />
        </div>
        </div>
   
    </div>

</div>
            </div>
            <div class="col sm-12 md-6 lg-6">
                <div class="relative">
                <div class="indigo padding">
             <h1 class="h3 no-margin text-lighter text-center text-white">Company Theme</h1>
             </div>
             <div>
             <ul class="list stripped">
              <li>
              <i class="fas fa-check text-blue"></i>
              &nbsp;Responsive
            </li>
              <li>
              <i class="fas fa-check text-blue"></i>
              &nbsp;100% Css
            </li>
              <li>
              <i class="fas fa-check text-blue"></i>
              &nbsp;Greate Layout
            </li>
              <li>
              <i class="fas fa-check text-blue"></i>
              &nbsp;Free Download
            </li>
            </ul>
             </div>
         <div class="padding">
         <div class="flex">
                 <div class="flex-50">
                     <a href="https://funcsscompanytemplate.surge.sh">
                     <button class="button blue card full-width text-white">Preview</button>
                     </a>
                 </div>
                 <div class="flex-50">
                     <a href="https://codeload.github.com/iddrismystic/companytheme/zip/refs/heads/main">
                     <button class="button deep-purple card full-width text-white">Download</button>
                     </a>
                 </div>
             </div>
         </div>
                </div>
 
            </div>
        </div>
    </div>
</div>
</div>

<div className="section hr"></div>

<div className="container">
<div className="text-center text-xx-large text-lighter text-indigo">Responsive</div>
<div class="text-x-large text-center">Responsive Grid Layout.</div>
<div className="padding-20">
    Create awesome responsive websites with css flex-box and media queries.
    Our framework partition your website in to columns and rows which are 
    responsive to fit all screen sizes.
</div>
<div class="padding-20">
<Link href="/grid">
<a>
<button class="fun-secondary button card text-white f2">
  Learn More
  <i class="fas fa-angle-right margin-left-10"></i>
  </button>
</a>
</Link>
</div>
<div className="container text-center">
<img src="/svg/devices.svg" className="width-100-p" alt="cssresponsive" />
</div>
</div>

<div className="section hr"></div>

<div className="container padding-top-30">
<h1 className="text-center text-xx-large text-lighter text-indigo no-margin">HTML AND CSS BUTTONS</h1>
<h2 class="text-x-large text-center no-margin text-lighter">Create Nice Css Buttons Designs</h2>
<div className="padding">
  Create nice css buttons for your website, use buttons with cool animation effects, 
  Just type the class <span class="badge">button</span> to style your button, you can change the background color
  of your button by using our css color classes, you can also create a hover up and ripple buttons.
</div>
<div>
  
<div>
    <div className='row'>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
                <div className='text-large'>Simple Button</div>
                <div className='hr section'></div>
                <button className='button indigo  text-white'>Simple Button</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Raised Button</div>
                <div className='hr section'></div>
                <button className='button deep-purple text-white card'>Raised Button</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Circular Button</div>
                <div className='hr section'></div>
                <button className='button indigo card text-white float height-50 width-50'>Float</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Full width Button</div>
                <div className='hr section'></div>
                <button className='button full-width green text-white card'>Full width</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Ripple Effect Button</div>
                <div className='hr section'></div>
                <button className='button full-width ripple pink text-white card'>Ripple Effect</button>
            </div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
            <div className='padding border card'>
            <div className='text-large'>Hover Up Button</div>
                <div className='hr section'></div>
                <button className='button full-width ripple teal card hover-up'>Hover up</button>
            </div>
        </div>
    </div>
    <div class="padding">
<Link href="/buttons">
<a>
    <button class="fun-secondary button card text-white f2">
  Learn More
  <i class="fas fa-angle-right margin-left-10"></i>
  </button>
</a>
</Link>
</div>
</div>
</div>


</div>
<div className="section hr"></div>

<div className="container padding-top-30">
<h1 className="text-center text-xx-large text-lighter text-indigo no-margin">CSS CARDS</h1>
<div className="padding">
 Design nice css cards, hoverable fliping card, reveal content card and horizontal cards.
 Cards are use to design specific important areas of your website, you can use css cards
. <br />import { Link } from 'next/link';
import About from './About';

 The class <span class="badge">card </span> is use to create a cool shadow effect on your 
 html element.
</div>
<div>
  
<div>
    <div className='row'>
        <div className='col sm-12 md-4 lg-4 padding'>
<div class="card width-100-p">
    <div class="relative">
        <img src="images/deo.jpg" className="width-100-p height-200" alt="css card" />
        <div class="text-large card-title text-white">Card Title</div>
    </div>

    <div class="padding text-small">
    This is have a Title on top of the image.
    You can use this card to display informtion about a person or a team.
    </div>
</div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
<div class="card hover-shadow">
    <div class="relative">
        <img src="images/deo.jpg" class="width-100-p height-200" alt="css card"/>
        <div class="text-large card-title text-white">Card Title</div>
        <div class="text-large card-fab">
            <button class='button indigo card text-white float height-40 width-40'>
            <i class="fas fa-check"></i>
            </button>
        </div>
    </div>

    <div class="padding text-small">
    This is have a Title on top of the image with a floating button.
    You can use this card to display informtion about a person or a team.
    </div>
</div>
            
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
        <div class="card reveal fit-height text-white pointer">
    <div class="reveal-front indigo padding">
  <div class="h3 text-center">Css Card Reveal</div>
  <p>
      This card reaveals its content when you hover on it.
  </p>
  <div class="padding text-center">
  <i class="fab fa-facebook pointer icon size-1 margin"></i>
  <i class="fab fa-instagram pointer icon size-1 margin"></i>
  <i class="fab fa-twitter pointer icon size-1 margin"></i>
  </div>
    </div>
    <img src="images/deo.jpg" class="width-100-p height-200" alt="css card reveal" />
  </div>
            
        </div>



    </div>
    <div class="padding">
<Link href="/card"><button class="fun-secondary button card text-white f2">
  Learn More
  <i class="fas fa-angle-right margin-left-10"></i>
  </button></Link>
</div>
</div>
</div>


</div>

<div class="container padding-top-30">
    <div class="header">Comment</div>
    <input class="padding light width-100-p borderless section" placeholder="Enter your email" />
    <textarea class="padding light width-100-p borderless section" rows="5" placeholder="Enter your message" ></textarea>
<div>
    <button class="button padding indigo card text-white">
        Comment <i class="fas fa-paper-plane"></i>
    </button>
</div>
</div>

<Footer />

        </section>
    );
}

export default Home;