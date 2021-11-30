import React from 'react';
import Footer from './../components/Footer';
function Dropdown(props) {
    return (
        <section>
                    <div className="content-wrapper">
       <div className="sub-content padding">
        <div className="border padding height-200 content-middle light">
        Ads
        </div>
        <div className="section">
          <a href="#simpledropdown" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Dropdown</div></a>
          <a href="#dropup" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Dropup</div></a> 
          <a href="#animateddropmenu" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Animated Drop Menu</div></a>        </div>
       </div>
           <div className="main-content">
           <div className="container">
        <div className="text-big text-lighter text-indigo">
         Funcss Dropdowns
        </div>
        <div className="h4">
        Dropdowns are usuallly use on the navigation bar, they hold 
        content which can be seen when you hover or click on them.
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
       
<div class="container padding-top-40" id="simpledropdown">
<div class="header-3 text-indigo">Simple Dropdown</div>
<div class="note">
    The <span class="badge">dropdown-hover</span> class is use to create a simple hoverble dropdown.
</div>
<div class="code">
<xmp>
{`
<div class="dropdown-hover text-white">
    <div class="drop-button">
        <div class="button indigo card">DropDown</div>
    </div>
     <div class="drop-menu white item-hoverable text-black">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
</div>`}
</xmp>
</div>
<div class="preview">

<div class="dropdown-hover text-white">
    <div class="drop-button">
        <div class="button indigo card">DropDown</div>
    </div>
     <div class="drop-menu white item-hoverable text-black">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
</div>

</div>
</div>
       
<div class="container padding-top-40" id="dropup">
<div class="header-3 text-indigo">Dropup</div>
<div class="note">
   The <span class="badge">dropup-hover</span> class is use to create hoverable dropups for your website.
</div>
<div class="code">
   <xmp>
{`<ul class="list bordered hoverable">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
</ul>`}
   </xmp>
</div>
<div class="preview">
<div class="dropup-hover text-white">
    <div class="drop-button">
        <div class="button deep-purple card">DropUp</div>
    </div>
     <div class="drop-menu white item-hoverable text-black">
         <div class="drop-item">LinkOne</div>
         <div class="drop-item">LinkTwo</div>
         <div class="drop-item">LinkThree</div>
         <div class="drop-item">LinkFour</div>
     </div>
</div>
</div>
</div>
<div class="container padding-top-40" id="animateddropmenu">
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
<div class="card padding">
<div class="row-flex">
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

export default Dropdown;