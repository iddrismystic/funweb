import React from 'react';
import Footer from './../components/Footer';
import { useState } from 'react';

function Navigation() {
    const [height, setheight] = useState("200px");
    const Handlesidebar = ()=>{
    if(height === "200px"){
        setheight("0px")
    }else{
        setheight("200px")
    }
    }
    return (
        <section>
                                <div className="content-wrapper">
       <div className="sub-content padding">
        <div className="border padding height-200 content-middle light">
        Ads
        </div>
        <div className="section">
          <a href="#simpleList" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple List</div></a>
          <a href="#borderedList" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Bordered List</div></a> 
          <a href="#strippedList" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Stripped List</div></a> 
          <a href="#headedList" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">List With Header</div></a>
          </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="h1 header text-lighter text-indigo">
           Navigation Bar
        </h1>
        <div className="h4">
          The navigation bar contains links <br /> to your webpages.
        </div>

        <div className="section hr">

        </div>
       </div>
 
<div className="container padding-top-40" id="simplenavbar">
<div className="header-3 text-indigo">Simple Navigation Bar</div>
<div className="note">
You can create simple navigation bars, just to navigate to your webpages.
</div>
<div className="code">
<xmp>
{`<div class="navigation-bar light card">
   <div class="text-x-large nav-logo">Logo</div>
     <div class="indigo padding">
       <a href="#" class="text-white text-small">Home</a>
       <a href="#" class="text-white text-small">About</a>
      <a href="#"  class="text-white text-small">Team</a>
      <a href="#"  class="text-white text-small">Contact</a>
     </div>
</div>`}
</xmp>
</div>
<div className="preview">
<div className="navigation-bar light card">
<div className="nav-logo h3">Logo</div>
<div className="indigo padding">
<a href="#" className="text-white text-small">Home</a>
<a href="#" className="text-white text-small">About</a>
<a href="#" className="text-white text-small">Team</a>
<a href="#" className="text-white text-small">Contact</a>
</div>
</div>

</div>
</div>
       
<div className="container padding-top-40" id="dropdownnavigationbar">
<div className="header-3 text-indigo">Navigation Bar With Dropdown</div>
<div className="note">
This navigation bar have dropdown which contains links to other subpages.
</div>
<div className="code">
   <xmp>
{`<div class="navigation-bar light card">
   <div class="text-x-large nav-logo">Logo</div>
     <div class="indigo padding">
        <div class="row-flex">
      <a href="#" class="text-white">Home</a>
      <a href="#" class="text-white">About</a>
      <a href="#" class="text-white">Team</a>
      <a href="#" class="text-white">Contact</a>
      <div class="dropdown-hover">
    <button class="button text-white drop-button"> Dropdown <i class="fas fa-angle-down rotate-up"></i></button>
     <div class="drop-menu white item-hoverable text-black fit-width">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
     </div>
     </div>
 </div>

</div>
`}
   </xmp>
</div>
<div className="preview">
<div className="navigation-bar light card width-100-p">
   <div className="text-x-large nav-logo">Logo</div>
     <div className="indigo padding">
        <div className="row-flex">
         <a href="#" className="text-white text-small">Home</a>
         <a href="#" className="text-white text-small">About</a>
      <div className="dropdown-hover">
    <div className="button text-white drop-button text-small"> Dropdown <i className="fas fa-angle-down rotate-up"></i></div>
     <div className="drop-menu white item-hoverable text-black fit-width">
         <div className="drop-item">LinkOne</div>
         <div className="drop-item">LinkTwo</div>
         <div className="drop-item">LinkThree</div>
         <div className="drop-item">LinkFour</div>
     </div>
     </div>
     </div>
 </div>

</div>

</div>
</div>
<div className="container padding-top-40" id="borderedList">
<div className="header-3 text-indigo">Animated Drop Menu</div>
<div className="note">
   The <span className="badge">rotate-up</span> and <span className="badge">rotate-down</span> className is use to create a rotating animated button.
</div>
<div className="code">
   <xmp>
{`<div class="row-flex">
<div class="dropup-hover">
    <button class="button blue text-white drop-button"> Hover Up <i className="fas fa-angle-down rotate-up"></i></button>
     <div class="drop-menu white item-hoverable text-black fit-width">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
</div>
<div class="dropdown-hover">
    <button className="button blue text-white drop-button"> Hover down <i className="fas fa-angle-up rotate-down"></i></button>
     <div className="drop-menu white item-hoverable text-black fit-width">
         <div className="drop-item">LinkOne</div>
         <div className="drop-item">LinkTwo</div>
         <div className="drop-item">LinkThree</div>
         <div className="drop-item">LinkFour</div>
     </div>
</div>
</div>`}
   </xmp>
</div>
<div className="preview">
<div className="navigation-bar responsive light card">
   <div className="text-x-large nav-logo">Logo</div>
   <div className="navigation-trigger" onClick={Handlesidebar}>
   <i className="fas fa-bars sidebar-trigger"></i>
   </div>
     <div className="indigo padding collapse" style={{height:`${height}`}}>
        <div className="link-wrapper">
         <a href="#" className="text-white">Home</a>
       <a href="#services" className="text-white">Services</a>
      <a href="#team" className="text-white">Team</a>
      <a href="#contact" className="text-white">Contact</a>
      <div className="dropdown-hover">
    <button className="button text-white drop-button"> Dropdown <i className="fas fa-angle-down rotate-up"></i></button>
     <div className="drop-menu white item-hoverable text-black fit-width">
         <div className="drop-item">LinkOne</div>
         <div className="drop-item">LinkTwo</div>
         <div className="drop-item">LinkThree</div>
         <div className="drop-item">LinkFour</div>
     </div>
     </div>
     </div>
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

export default Navigation;