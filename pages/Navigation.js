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

<div class="container">
<table class="table stripped text-smaller">
                <thead>
                <tr>
                    <td>Class</td>
                    <td>discription</td>
                    <td>syntax</td>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>.dropdown-hover</td>
                        <td>It contains all other contents in the dropdown.</td>
                        <td><div> class = "dropdown-hover"</div></td>
                    </tr>
                    <tr>
                        <td>.dropdown-button</td>
                        <td>It triggers your dropdown.It can be a link,div or any other html element</td>
                        <td><div> class = "dropdown-button"</div></td>
                    </tr>
                    <tr>
                        <td>dropdown-menu</td>
                        <td>
                           It contains contents of your dropdown.
                        </td>
                        <td><div> class = "dropdown-menu"</div></td>
                    </tr>
                    <tr>
                        <td>dropdown-item</td>
                        <td>
                           Are found in the dropdown-menu, they are displayed in block and sections.
                        </td>
                        <td><div> class = "dropdown-item"</div></td>
                    </tr>
                </tbody>
            </table>
</div>
       
<div class="container padding-top-40" id="simplenavbar">
<div class="header-3 text-indigo">Simple Navigation Bar</div>
<div class="note">
You can create simple navigation bars, just to navigate to your webpages.
</div>
<div class="code">
<xmp>
{`<div class="navigation-bar light card">
   <div class="text-x-large nav-logo">Logo</div>
     <div class="indigo padding">
       <a href="#" class="text-white">Home</a>
       <a href="#" class="text-white">About</a>
      <a href="#" class="text-white">Team</a>
      <a href="#" class="text-white">Contact</a>
     </div>
</div>`}
</xmp>
</div>
<div class="preview">
<div class="navigation-bar light card">
<div class="nav-logo h3">Logo</div>
<div class="indigo padding">
<a href="#" class="text-white text-small">Home</a>
<a href="#" class="text-white text-small">About</a>
<a href="#" class="text-white text-small">Team</a>
<a href="#" class="text-white text-small">Contact</a>
</div>
</div>

</div>
</div>
       
<div class="container padding-top-40" id="dropdownnavigationbar">
<div class="header-3 text-indigo">Navigation Bar With Dropdown</div>
<div class="note">
This navigation bar have dropdown which contains links to other subpages.
</div>
<div class="code">
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
<div class="preview">
<div class="navigation-bar light card width-100-p">
   <div class="text-x-large nav-logo">Logo</div>
     <div class="indigo padding">
        <div class="row-flex">
         <a href="#" class="text-white text-small">Home</a>
         <a href="#" class="text-white text-small">About</a>
      <div class="dropdown-hover">
    <div class="button text-white drop-button text-small"> Dropdown <i class="fas fa-angle-down rotate-up"></i></div>
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

</div>
</div>
<div class="container padding-top-40" id="borderedList">
<div class="header-3 text-indigo">Animated Drop Menu</div>
<div class="note">
   The <span class="badge">rotate-up</span> and <span class="badge">rotate-down</span> class is use to create a rotating animated button.
</div>
<div class="code">
   <xmp>
{`<div class="row-flex">
<div class="dropup-hover">
    <button class="button blue text-white drop-button"> Hover Up <i class="fas fa-angle-down rotate-up"></i></button>
     <div class="drop-menu white item-hoverable text-black fit-width">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
</div>
<div class="dropdown-hover">
    <button class="button blue text-white drop-button"> Hover down <i class="fas fa-angle-up rotate-down"></i></button>
     <div class="drop-menu white item-hoverable text-black fit-width">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
</div>
</div>`}
   </xmp>
</div>
<div class="preview">
<div class="navigation-bar responsive light card">
   <div class="text-x-large nav-logo">Logo</div>
   <div class="navigation-trigger" onClick={Handlesidebar}>
   <i class="fas fa-bars sidebar-trigger"></i>
   </div>
     <div class="indigo padding collapse" style={{height:`${height}`}}>
        <div class="link-wrapper">
         <a href="#" class="text-white">Home</a>
       <a href="#services" class="text-white">Services</a>
      <a href="#team" class="text-white">Team</a>
      <a href="#contact" class="text-white">Contact</a>
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

</div>
</div>
  

<Footer />
</div>
</div>
        </section>
    );
}

export default Navigation;