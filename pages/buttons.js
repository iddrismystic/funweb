import React from 'react';
import Footer from '../components/Footer';

function Buttons() {
    const simple = `
    <button class='button indigo  text-white'>Simple Button</button>
    `
    const raised = `
    <button className='button deep-purple text-white card'>Raised Button</button>
    `
    const circle = `
    <button className='button indigo card text-white float height-50 width-50'>Float</button>
    `
    return (
        <section>
    <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding height-200 content-middle light">
             <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6"></div>
             </div>
             <div className="section">
               <a href="#simpleButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Button</div></a>
               <a href="#raisedButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Raised Button</div></a>
               <a href="#circularButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Circular Button</div></a>
               <a href="#fullWidthButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Full Width Button</div></a>
               <a href="#rippleButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Ripple Effect Button</div></a>
               <a href="#hoverUpButton" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Hover Up Button</div></a>
             </div>
            </div>
                <div className="main-content">
                <div className="container">
             <div className="text-big text-lighter text-indigo">
                 Buttons
             </div>
             <div className="h4">
               Cool Buttons Makes Your Website<br /> Reactive.
             </div>

             <div className="section hr">
    
             </div>
            </div>

<div className='container'>
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
</div>

<div class="container padding-top-40" id="simpleButton">
    <div class="header-3 text-indigo">Simple Button</div>
<div class="note">
    using the class <span class="badge">button</span> will create a simple cool button, you can use the color class to change the color of your button.
</div>
    <div class="code">
        <xmp>
         {`
<button class='button indigo  text-white'>Indigo Button</button>

  <button class='button pink  text-white'>Pink Button</button>

<button class='button purple  text-white'>purple Button</button>      
         `}
        </xmp>
    </div>
    <div class="preview">
    <div class='padding border card'>
    <div class='text-large'>Simple Button</div>
    <div class='hr section'></div>
    <button class='button indigo  text-white'>Indigo Button</button>
    <button class='button pink  text-white'>Pink Button</button>
    <button class='button purple  text-white'>purple Button</button>
     </div>

    </div>
</div>

<div class="container padding-top-40" id="raisedButton">
    <div class="header-3 text-indigo">Raised Button</div>
<div class="note">
    using the class <span class="badge">card</span> will create a shadow around your button.
</div>
    <div class="code">
<xmp>{`<button class='button deep-purple text-white card'>Raised Button</button>`}</xmp>
    </div>
    <div class="preview">
    <div className='padding border card'>
    <div className='text-large'>Raised Button</div>
        <div className='hr section'></div>
        <button class='button deep-purple text-white card'>Raised Button</button>
      
    </div>

    </div>
</div>
<div class="container padding-top-40" id="circularButton">
    <div class="header-3 text-indigo">Circular Button</div>
<div class="note">
    using the class <span class="badge">float</span> will create a circular button, make sure to add a height and a width of the same value
    to create a perfect circle.
</div>
    <div class="code">
     <xmp>{`<button class='button indigo card text-white float height-50 width-50'>Float</button>`}</xmp>
    </div>
    <div class="preview">
    <div class='padding border card'>
      <div class='text-large'>Circular Button</div>
          <div class='hr section'></div>
          <button class='button indigo card text-white float height-50 width-50'>Float</button>
      </div>
    </div>
</div>
<div class="container padding-top-40" id="fullWidthButton">
    <div class="header-3 text-indigo">Full Width Button</div>
<div class="note">
   The<span class="badge">full-width</span> class is use to create a button with a width of 100%.
</div>
    <div class="code">
        <xmp>
            {`
<button class='button full-width indigo text-white card'>Full width</button>
<button class='button full-width blue text-white card'>Full width</button>
           `}
        </xmp>
    </div>
    <div class="preview">
    <div class='padding border card'>
     <div class='text-large'>Full width Button</div>
         <div class='hr section'></div>
         <button class='button full-width indigo text-white card'>Full width</button>
         <button class='button full-width blue text-white card'>Full width</button>
     </div>

    </div>
</div>
<div class="container padding-top-40" id="rippleButton">
    <div class="header-3 text-indigo">Ripple Effect Button</div>
<div class="note">
   The<span class="badge">ripple</span> class add an effect when you click on the button.
</div>
    <div class="code">
        <xmp>
            {`<button class='button ripple pink text-white card'>Ripple Effect</button>`}
        </xmp>
    </div>
    <div class="preview">
    <div className='padding border card'>
    <div className='h2'>Ripple Effect Button</div>
    <div>Click on the button to see the effect </div>
        <div className='hr section'></div>
        <button class='button ripple pink text-white card'>Ripple Effect</button>
    </div>

    </div>
</div>
<div class="container padding-top-40" id="hoverUpButton">
    <div class="header-3 text-indigo">Hover Up Button</div>
<div class="note">
   The<span class="badge">hover-up</span> class add a hover up effect when you hover on the button.
</div>
    <div class="code">
        <xmp>
            {`<button class='button ripple teal card hover-up text-white'>Hover up</button>`}
        </xmp>
    </div>
    <div class="preview">
    <div className='padding border card'>
    <div className='text-large'>Hover Up Button</div>
        <div className='hr section'></div>
        <button class='button ripple teal card hover-up text-white'>
            Hover up
        </button>
    </div>

    </div>
</div>
<Footer />
</div>
</div>
        </section>
    );
}

export default Buttons;