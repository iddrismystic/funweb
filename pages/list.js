import React from 'react';
import Footer from '../components/Footer';

function list() {
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

       
<div className="container padding-top-40" id="simpleList">
<div className="header-3 text-indigo">Simple List</div>
<div className="note">
    The <span className="badge">list</span> class is use to create a simple list.
</div>
<div className="code">
   <xmp>
{`<ul class="list">
  <li>HTML</li>
  <li>CSS</li>
  <li>FUN CSS</li>
  <li>JAVASCRIPT</li>
</ul>`}
   </xmp>
</div>
<div className="preview">
<ul className="list">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
</ul>
        
</div>
</div>
       
<div className="container padding-top-40" id="borderedList">
<div className="header-3 text-indigo">Bordered List</div>
<div className="note">
   The <span className="badge">bordered</span> class is use to add a border to your list.
</div>
<div className="code">
   <xmp>
{`<ul class="list bordered hoverable">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
</ul>`}
   </xmp>
</div>
<div className="preview">
<ul className="list bordered hoverable">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
</ul>  
</div>
</div>
       
<div className="container padding-top-40" id="strippedList">
<div className="header-3 text-indigo">Stripped List</div>
<div className="note">
    The <span className="badge">stripped</span> class is use to create a stripped list.
</div>
<div className="code">
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
<div className="preview">
<ul className="list stripped">
    <li>HTML</li>
    <li>CSS</li>
    <li>FUN CSS</li>
    <li>JAVASCRIPT</li>
    <li>FUN CSS</li>
    <li>REACT</li>
</ul>
     
</div>
</div>

<div className="container padding-top-40" id="headedList">
<div className="header-3 text-indigo">List Header</div>
<div className="note">
  You can add a header to your list by using our <span className="badge">header</span> class.
</div>
<div className="code">
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
<div className="preview">
<ul className="list stripped bordered">
    <li><div className="h2">Courses</div></li>
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

export default list;