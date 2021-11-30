import React from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
function Slidepanels() {
    return (
        <section>
            <Head>
            <title>Css Slide Panels | Funcss Framework</title>
          <meta name='description' content='
        Slide panels reveals their content when a user hovers
        on them, you can use them for your about section when 
        creating a website.
       ' />
    <meta
    name="keywords"
    content="fun, css, card, slide, panel, slide panel"
    />
            </Head>
              <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding height-200 content-middle light">
             <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6"></div>
             </div>
             <div className="section">
               <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
               <a href="#topPanel" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Top Slide Panel</div></a>
               <a href="#bottomPanel" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Bottom Slide Panel</div></a> 
               <a href="#leftPanel" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Left Slide Panel</div></a>
               <a href="#rightPanel" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Right Slide Panel</div></a>
            </div>
            </div>
                <div className="main-content">
                <div className="container">
             <div className="text-big text-lighter text-indigo">
                Slide Panels
             </div>
             <div className="h4">
            Slide panels shows their overlayed content when you<br /> hover on them.
             </div>

             <div className="section hr">
    
             </div>
            </div>

            <div className="container" id="introduction">
            <table class="table stripped text-small">
        <thead class="indigo text-white">
        <tr>
            <td>Class</td>
            <td>discription</td>
            <td>syntax</td>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>.slide-panel</td>
                <td>Create A sliding panel</td>
                <td><div> class = "slide-panel"</div></td>
            </tr>
            <tr>
                <td>.slide-panel-content</td>
                <td>It is written in the slide panel, it contains contents of your slide.</td>
                <td><div>class = "slide-panel-content"</div></td>
            </tr>
            <tr>
                <td>.slide-panel-image</td>
                <td>To show the content in which the slide will be on top.</td>
                <td> class = "slide-panel-image"</td>
            </tr>
            <tr>
                <td>.slide-top</td>
                <td>To create a sliding effect from the top</td>
                <td> class = "slide-top"</td>
            </tr>
            <tr>
                <td>.slide-bottom</td>
                <td>To create a sliding effect from the bottom</td>
                <td> class = "slide-bottom"</td>
            </tr>
            <tr>
                <td>.slide-left</td>
                <td>To create a sliding effect from the left</td>
                <td> class = "slide-left"</td>
            </tr>
            <tr>
                <td>.slide-right</td>
                <td>To create a sliding effect from the bottom</td>
                <td> class = "slide-bottom"</td>
            </tr>
  

        </tbody>
    </table>
            </div>

            <div class="container padding-top-40" id="topPanel">
    <div class="header-3 text-indigo">Slide Top</div>
    <div class="note">
The <span class="badge"> slide-top </span> class is use to create a slide animation from the top.
</div>
    <div class="code">
        <xmp>
            {`
    <center> 
    <div class="padding text-larger">slide panel top</div>
    <div class="slide-panel slide-top fit-height width-200">
        <div class="slide-panel-content indigo text-center padding opacity-1 text-white">
        <div class="text-larger">Jhon Deo</div>
     Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
        </div>
        <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
    </div>      
    </center>
    
            `}
        </xmp>
    </div>
    <div class="preview">
<center> 
<div class="padding text-larger">slide panel top</div>

<div class="slide-panel slide-top fit-height width-200">
    <div class="slide-panel-content indigo text-center padding opacity-1 text-white">
    <div class="text-larger">Jhon Deo</div>
 Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
    </div>
    <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
</div>      
</center>

    </div>
</div>

<div class="container padding-top-40" id="bottomPanel">
    <div class="header-3 text-indigo">Slide Bottom</div>
    <div class="note">
The <span class="badge"> slide-bottom </span> class is use to create a slide animation from the bottom.
</div>
    <div class="code">
        <xmp>
            {`
    <center> 
    <div class="padding text-larger">slide panel Bottom</div>
    <div class="slide-panel slide-bottom fit-height width-200">
        <div class="slide-panel-content indigo text-center padding opacity-1 text-white">
        <div class="text-larger">Jhon Deo</div>
     Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
        </div>
        <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
    </div>      
    </center>
    
            `}
        </xmp>
    </div>
    <div class="preview">
<center> 
<div class="padding text-larger">slide panel Bottom</div>
<div class="slide-panel slide-bottom fit-height width-200">
    <div class="slide-panel-content indigo text-center padding opacity-1 text-white">
    <div class="text-larger">Jhon Deo</div>
 Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
    </div>
    <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
</div>      
</center>

    </div>
</div>

<div class="container padding-top-40" id="leftPanel">
    <div class="header-3 text-indigo">Slide Left</div>
    <div class="note">
The <span class="badge"> slide-left </span> class is use to create a slide animation from the left.
</div>
    <div class="code">
        <xmp>
            {`
    <center> 
    <div class="padding text-larger">slide panel Bottom</div>
    <div class="slide-panel slide-left fit-height width-200">
        <div class="slide-panel-content deep-purple text-center padding opacity-1 text-white">
        <div class="text-larger">Jhon Deo</div>
     Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
        </div>
        <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
    </div>      
    </center>
    
            `}
        </xmp>
    </div>
    <div class="preview">
<center> 
<div class="padding text-larger">slide panel Left</div>
<div class="slide-panel slide-left fit-height width-200">
    <div class="slide-panel-content deep-purple text-center padding opacity-1 text-white">
    <div class="text-larger">Jhon Deo</div>
 Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
    </div>
    <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
</div>      
</center>

    </div>
</div>

<div class="container padding-top-40" id="rightPanel">
    <div class="header-3 text-indigo">Slide Right</div>
    <div class="note">
The <span class="badge"> slide-right </span> class is use to create a slide animation from the right.
</div>
    <div class="code">
        <xmp>
            {`
    <center> 
    <div class="padding text-larger">slide panel Bottom</div>
    <div class="slide-panel slide-right fit-height width-200">
        <div class="slide-panel-content deep-purple text-center padding opacity-1 text-white">
        <div class="text-larger">Jhon Deo</div>
     Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
        </div>
        <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
    </div>      
    </center>
    
            `}
        </xmp>
    </div>
    <div class="preview">
<center> 
<div class="padding text-larger">slide panel Right</div>
<div class="slide-panel slide-right fit-height width-200">
    <div class="slide-panel-content deep-purple text-center padding opacity-1 text-white">
    <div class="text-larger">Jhon Deo</div>
 Laboriosam ex nostrum ad aperiam cumque eveniet magni recusandae.
    </div>
    <img src="/images/avatar.png" alt="" class="slide-panel-image width-100-p height-100-p" />
</div>      
</center>

    </div>
</div>


<Footer />
  </div>
  </div>
        </section>
    );
}

export default Slidepanels;