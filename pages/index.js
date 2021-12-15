import React from 'react';
import Footer from './../components/Footer';
import Head from 'next/head'
import Link from 'next/dist/client/link'
import axios from "axios"
import {useEffect} from "react"
function Home() {
    useEffect( async()=>{
       await axios.get("https://funcss-api.herokuapp.com/api")
       .then((response)=>{
            console.log(response)
          }).catch(err=>console.log(err))
    }, [])
    return (
        <section className="padding-top-30" lang="eng">
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


      <div className="container">
        <div className="row">
            <div className="col sm-12 md-12 lg-6">
             <div className="padding">
             <h1 className="no-margin header h4">
                <span className="header text-indigo">Fun Css:</span> Modern responsive CSS framework for developing responsive websites.
            </h1>
             </div>
             <div className="padding">
                 Funcss is a free, open source css framework for developing modern responsive
                 websites and impressive front-end applications.
             </div>
   <div className="flex">
    <div className="flex-50">
        <div className="padding">
        <Link href="/gettingstarted">
         <a>
         <button className="button width-100-p text-white indigo card ">
          Getting Started
          <i className="fas fa-angle-right margin-left-10"></i>
          </button>
         </a>
       </Link>
        </div>
  </div>
    <div className="flex-50">
        <div className="padding">
        <Link href="https://codeload.github.com/fun-css/funcss/zip/refs/heads/main">
            <a>
            <button className="button width-100-p deep-purple card text-white">
        <i className="fas fa-download icon margin-right-10"></i> 
      Download v1.0 
        </button>         
            </a>
      </Link>
        </div>
  </div>

</div>
            </div>
            <div className="col sm-12 md-12 lg-6 padding-top-20">
                <div>
                    <video src="/video/colors.mp4" className="responsive" controls></video>
                </div>
            </div>
        </div>


      </div>

<div className="container"><div className="section hr"></div></div>

<div className="container">
<div className="text-center text-x-large text-lighter text-indigo">Our Themes</div>
<div className="text-center h4">Download And Use Our Free Css Themes</div>
<div className="text-center  padding">
  Download and use our Themes for free, Build cool websites with Funcss.
</div>

<div>
    <div className="card">
        <div className="row">
            <div className="col sm-12 md-6 lg-6">
              
<div className="slider three">
    <div className="slide-container">
        <div className="slide">
            <div className="slide-content">
            <img src="/themes/1.jpg" className="responsive" alt="company theme" />
            </div>

        </div>
        <div className="slide">
            <div className="slide-content">
            <img src="/themes/2.jpg" className="responsive" alt="company theme" />
            </div>
        </div>
        <div className="slide">
        <div className="slide-content">
        <img src="/themes/3.jpg" className="responsive" alt="company theme" />
        </div>
        </div>
   
    </div>

</div>
            </div>
            <div className="col sm-12 md-6 lg-6">
                <div className="relative">
                <div className="indigo padding">
             <h1 className="h3 no-margin text-lighter text-center text-white">Company Theme</h1>
             </div>
             <div>
             <ul className="list stripped">
              <li>
              <i className="fas fa-check text-blue"></i>
              &nbsp;Responsive
            </li>
              <li>
              <i className="fas fa-check text-blue"></i>
              &nbsp;100% Css
            </li>
              <li>
              <i className="fas fa-check text-blue"></i>
              &nbsp;Greate Layout
            </li>
              <li>
              <i className="fas fa-check text-blue"></i>
              &nbsp;Free Download
            </li>
            </ul>
             </div>
         <div className="padding">
         <div className="flex">
                 <div className="flex-50">
                     <a href="https://funcsscompanytemplate.surge.sh">
                     <button className="button blue card full-width text-white">Preview</button>
                     </a>
                 </div>
                 <div className="flex-50">
                     <a href="https://codeload.github.com/iddrismystic/companytheme/zip/refs/heads/main">
                     <button className="button deep-purple card full-width text-white">Download</button>
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
<div className="h4 text-center">Create Responsive Websites With Css Grid.</div>
<div className="padding-20">
    Create awesome responsive websites with css flex-box and media queries.
    Our framework partition your website in to columns and rows which are 
    responsive to fit all screen sizes.
</div>
<div className="padding-20">
<Link href="/grid">
<a>
<button className="indigo button card text-white f2">
  Learn More
  <i className="fas fa-angle-right margin-left-10"></i>
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
<h1 className="text-center text-xx-large text-lighter text-indigo no-margin">FUNCSS BUTTONS</h1>
<h2 className="text-center no-margin h4">Create Nice Css Buttons Designs</h2>
<div className="padding">
  Create nice css buttons for your website, use buttons with cool animation effects, 
  Just type the class<span className="badge">button</span> to style your button, you can change the background color
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
    <div className="padding">
<Link href="/buttons">
<a>
    <button className="indigo button card text-white f2">
  Learn More
  <i className="fas fa-angle-right margin-left-10"></i>
  </button>
</a>
</Link>
</div>
</div>
</div>


</div>
<div className="section hr"></div>

<div className="container padding-top-30">
<div className="text-center text-xx-large text-lighter text-indigo no-margin">CSS CARDS</div>
<h2 className="header h4 padding">Create css cards, hoverable cards, fliping cards , horizontal cards and reveal content cards.</h2>
<div className="padding">
 Design nice css cards, hoverable fliping card, reveal content card and horizontal cards.
 Cards are use to design specific important areas of your website.
 The class <span className="badge">card </span> is use to create a cool shadow effect on your 
 html element.
</div>
<div>
  
<div>
    <div className='row'>
        <div className='col sm-12 md-4 lg-4 padding'>
<div className="card width-100-p">
    <div className="relative">
        <img src="images/deo.jpg" className="width-100-p height-200" alt="hoverable css card" />
        <div className="text-large card-title text-white">Card Title</div>
    </div>

    <div className="padding text-small">
    This is have a Title on top of the image.
    You can use this card to display informtion about a person or a team.
    </div>
</div>
        </div>
        <div className='col sm-12 md-4 lg-4 padding'>
<div className="card hover-shadow">
    <div className="relative">
        <img src="images/deo.jpg" className="width-100-p height-200" alt="reveal content css card"/>
        <div className="text-large card-title text-white">Card Title</div>
        <div className="text-large card-fab">
            <button className='button indigo card text-white float height-40 width-40'>
            <i className="fas fa-check"></i>
            </button>
        </div>
    </div>

    <div className="padding text-small">
    This is have a Title on top of the image with a floating button.
    You can use this card to display informtion about a person or a team.
    </div>
</div>
            
        </div>


    </div>
    <div className="padding">
<Link href="/card">
<button className="button text-dark f2">
  Learn More
  <i className="fas fa-angle-right margin-left-10"></i>
</button>
</Link>
</div>
</div>
</div>


</div>

<div className="container padding-top-30">
<div className="container">
            <div className="h2 text-center outfit">What People Have To Say</div>
 </div>
<div className="slider three padding-20">
    <div className="slide-container">
        <div className="slide">
        <div className="pointer padding react-card center">
        <div className="row-flex">
            <div> <img src="/images/deo.jpg" className="height-50 width-50 circle" /> </div>
            <div className="padding">
             <div className="">@Jhon Deo</div>
            <div className="opacity-5 text-small">
            <i className="fas fa-check text-deep-purple"></i>
            <span>Developer</span>
            </div>
            </div>
        </div>
        <div>
          <span><i className="fas fa-quote-left text-indigo inline-block margin"></i></span>
          <span className="text-small">          
          Actually, the framework is good. It helps take away your stress and 
          also save much of your time when developing a website. Thank you...
          </span>
          <span><i className="fas fa-quote-right text-indigo inline-block margin"></i></span>
        </div>
    </div>
        </div>

        <div className="slide">
        <div className="pointer padding react-card center">
        <div className="row-flex">
            <div> <img src="/images/jane.jpg" className="height-50 width-50 circle" /> </div>
            <div className="padding">
             <div className="">@Mary Jane</div>
            <div className="opacity-5 text-small">
            <i className="fas fa-check text-deep-purple"></i>
            <span>Student</span>
            </div>
            </div>
        </div>
        <div>
          <span><i className="fas fa-quote-left text-indigo inline-block margin"></i></span>
          <span className="">          
          You gotta try this css framework out, it is super cool and fantastic, it makes 
          your code look clean. 
          </span>
          <span><i className="fas fa-quote-right text-indigo inline-block margin"></i></span>
        </div>
    </div>
        </div>
        <div className="slide">
        <div className="pointer padding react-card center">
        <div className="row-flex">
            <div> <img src="/images/iddrisabdulwahab.jpg" className="height-50 width-50 circle" /> </div>
            <div className="padding">
             <div className="">@Mystical</div>
            <div className="opacity-5">
            <i className="fas fa-check text-deep-purple"></i>
            <span>web developer</span>
            </div>
            </div>
        </div>
        <div>
          <span><i className="fas fa-quote-left text-indigo inline-block margin"></i></span>
          <span className="">          
           Funcss, you are the best, now i can create multiple responsive websites within minutes.
           Your framework is actually the best.
          </span>
          <span><i className="fas fa-quote-right text-indigo inline-block margin"></i></span>
        </div>
    </div>
        </div>
    </div>

</div>



</div>

<Footer />

        </section>
    );
}

export default Home;