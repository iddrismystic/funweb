import React from 'react';
import Footer from './../components/Footer';

function List() {
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
        <h1 className="header h1 text-lighter text-indigo">
           List
        </h1>
        <div className="h4">
          List can be use to collect data and group <br /> the data into rows.
        </div>

        <div className="section hr">

        </div>
       </div>

       
<div class="container padding-top-40" id="simpleList">
<div class="header-3 text-indigo">Simple List</div>
<div class="note">
    The <span class="badge">list</span> class is use to create a simple list.
</div>
<div class="code">
   <xmp>
{`<ul class="list">
  <li>HTML</li>
  <li>CSS</li>
  <li>FUN CSS</li>
  <li>JAVASCRIPT</li>
</ul>`}
   </xmp>
</div>
<div class="preview">
<ul class="list">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
</ul>
        
</div>
</div>
       
<div class="container padding-top-40" id="borderedList">
<div class="header-3 text-indigo">Bordered List</div>
<div class="note">
   The <span class="badge">bordered</span> class is use to add a border to your list.
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
<ul class="list bordered hoverable">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
</ul>  
</div>
</div>
       
<div class="container padding-top-40" id="strippedList">
<div class="header-3 text-indigo">Stripped List</div>
<div class="note">
    The <span class="badge">stripped</span> class is use to create a stripped list.
</div>
<div class="code">
   <xmp>
{`<ul class="list stripped">
  <li>HTML</li>
  <li>CSS</li>
  <li>FUN CSS</li>
  <li>JAVASCRIPT</li>
  <li>FUN CSS</li>
  <li>REACT</li>
</ul>`}
   </xmp>
</div>
<div class="preview">
<ul class="list stripped">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
    <li>FUN CSS</li>
    <li>REACT</li>
</ul>
     
</div>
</div>

<div class="container padding-top-40" id="headedList">
<div class="header-3 text-indigo">List Header</div>
<div class="note">
  You can add a header to your list by using our <span class="badge">header</span> class
</div>
<div class="code">
   <xmp>
{`<ul class="list stripped bordered">
 <li><h2>Courses</h2></li>
 <li>HTML</li>
 <li>CSS</li>
 <li>FUN CSS</li>
 <li>JAVASCRIPT</li>
 <li>FUN CSS</li>
 <li>REACT</li>
</ul>`}
   </xmp>
</div>
<div class="preview">
<ul class="list stripped bordered">
    <li><div class="h2">Courses</div></li>
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
    <li>FUN CSS</li>
    <li>REACT</li>
</ul>
</div>
</div>

<Footer />
</div>
</div>
   </section>
    );
}

export default List;