import React from 'react';
import Footer from '../components/Footer';
function tooltip(props) {
    return (
        <section>
        <div className="content-wrapper">
       <div className="sub-content padding">
        <div className="border padding height-200 content-middle light">
        Ads
        </div>
        <div className="section">
        <a href="#top" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Top Tooltip</div></a>
        <a href="#bottom" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Bottom Tooltip</div></a> 
        <a href="#lefttip" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Left Tooltip</div></a> 
        <a href="#righttip" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Right Tooltip</div></a> 
        </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="header h1 text-lighter text-indigo">
          Css Tooltip - Funcss
        </h1>
        <div className="h4">
         Tooltips provides information about a particular element when you hover on that element.
        </div>

        <div className="section hr">

        </div>
       </div>

       
<div className="container padding-top-40" id="simple">
<div className="header-3 text-indigo">Top Tooltip</div>
<div className="note">
The class <span className="badge">top-tip</span> is use to create a tooltip to the top of that element.
</div>
<div className="code">
   <xmp>
{`<div class="tooltip">
  <button class="button indigo card text-white"> Top Tooltip </button>
  <span class="tip-top">Hello</span>
</div>`}
   </xmp>
</div>

<div className="preview" id="modal">

<div className="tooltip">
  <button className="button indigo card text-white"> Top Tooltip </button>
  <span className="tip-top">Hello</span>
</div>
</div>


</div>

<div className="container padding-top-40" id="bottom">
<div className="header-3 text-indigo">Bottom Tooltip</div>
<div className="note">
The class <span className="badge">bottom-tip</span> is use to create a tooltip which appears on the bottom of that element.
</div>
<div className="code">
   <xmp>
{`<div class="tooltip">
  <button class="button indigo card text-white"> Bottom Tooltip </button>
  <span class="tip-bottom">Hello</span>
</div>`}
   </xmp>
</div>

<div className="preview">
<div className="tooltip">
  <button className="button indigo card text-white"> bottom Tooltip </button>
  <span className="tip-bottom">Hello</span>
</div>
</div>

</div>

<div className="container padding-top-40" id="lefttip">
<div className="header-3 text-indigo">Left Tooltip</div>
<div className="note">
The class <span className="badge">left-tip</span> is use to create a tooltip which appears on at the left side of that element.
</div>
<div className="code">
   <xmp>
{`<div class="tooltip">
  <button class="button indigo card text-white"> Left Tooltip </button>
  <span class="tip-left">Hello</span>
</div>`}
   </xmp>
</div>

<div className="preview">
<div className="tooltip">
  <button className="button indigo card text-white"> Left Tooltip </button>
  <span className="tip-left">Hello</span>
</div>
</div>

</div>

<div className="container padding-top-40" id="righttip">
<div className="header-3 text-indigo">Right Tooltip</div>
<div className="note">
The class <span className="badge">right-tip</span> is use to create a tooltip which appears at the right side of that element.
</div>
<div className="code">
   <xmp>
{`<div class="tooltip">
  <button class="button indigo card text-white"> Right Tooltip </button>
  <span class="tip-right">Hello</span>
</div>`}
   </xmp>
</div>

<div className="preview">
<div className="tooltip">
  <button className="button indigo card text-white"> Right Tooltip </button>
  <span className="tip-right">Hello</span>
</div>
</div>

</div>


 



<Footer />

</div>
</div>
   </section>
    );
}

export default tooltip;