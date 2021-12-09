import React from 'react';
import Footer from './../components/Footer';

function input() {
    return (
        <section>
             <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding height-200 content-middle light">
             <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6">
                 Ads
             </div>
             </div>
             <div className="section">
               <a href="#simpleinput" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Input</div></a>
               <a href="#borderedinput" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Bordered Input</div></a> 
               <a href="#borderlessinput" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Borderless Input</div></a>
               <a href="#roundedinput" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Rounded Input</div></a>
               <a href="#animatedinput" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Animated Input</div></a>
              
            </div>
            </div>
                <div className="main-content">
                <div className="container">
             <h1 className="text-big text-lighter header text-indigo">
                Input
             </h1>
             <div className="h4">
               Inputs Are Use To Accept Data From The User.
             </div>

             <div className="section hr">
    
             </div>
            </div>

            
 <div className="container padding-top-40" id="simpleinput">
    <div className="header-3 text-indigo">Simple</div>
    <div className="note">
        The <span className="badge">input</span> class is use to create a simple input field with a border at the bottom.
    </div>
    <div className="code">
        <xmp>
 {`<input class="input full-width padding" placeholder="This is a simple input field." />`}
        </xmp>
    </div>
    <div className="preview">

<div className="card padding">
<div className="text-larger padding">Simple Input Field</div>
<input className="input full-width padding" placeholder="This is a simple input field." />
</div>      

    </div>
</div>
            
 <div className="container padding-top-40" id="borderedinput">
    <div className="header-3 text-indigo">Bordered</div>
    <div className="note">
        The <span className="badge">bordered</span> class adds border to your input field.
    </div>
    <div className="code">
        <xmp>
            {`
<input class="input bordered full-width padding" placeholder="This is a simple input field." />
            `}
        </xmp>
    </div>
    <div className="preview">

<div className="card padding">
<div className="text-larger padding">Bordered Input Field</div>
<input className="input full-width bordered padding" placeholder="This is a bordered input field." />
</div>      

    </div>
</div>
            
 <div className="container padding-top-40" id="borderlessinput">
    <div className="header-3 text-indigo">Borderless Input Field</div>
    <div className="note">
    The <span className="borderless"> borderless </span> class is use to remove all kind of border in your input field.
    </div>
    <div className="code">
        <xmp>
            {`
<input class="input full-width borderless light padding" placeholder="This is a borderless input field." />
            `}
        </xmp>
    </div>
    <div className="preview">

<div className="card padding">
<div className="text-larger padding">Borderless Input Field</div>
<input className="input full-width borderless light padding" placeholder="This is a borderless input field." />
</div>      

    </div>
</div>
 <div className="container padding-top-40" id="roundedinput">
    <div className="header-3 text-indigo">Rounded Input Field</div>
    <div className="note">
    The <span className="badge"> round-value </span> class is use to create a rounded input, the value can be
    <span className="badge">20, 30, 40 and 50</span>
    </div>
    <div className="code">
        <xmp>
            {`
<input class="input full-width round-30 light padding" placeholder="This is a rounded input with border-radius 15" />
            `}
        </xmp>
    </div>
    <div className="preview">

<div className="card padding">
<div className="text-larger padding">Rounded Input Field</div>
<input className="input full-width round-30 light padding" placeholder="This is a rounded input with border-radius 15" />
</div>      

    </div>
</div>
 <div className="container padding-top-40" id="animatedinput">
    <div className="header-3 text-indigo">Animated Input Field</div>
    <div className="code">
        <xmp>
{`<input class="input bordered light animate-width padding" placeholder="view full width."/>`}
        </xmp>
    </div>
    <div className="preview">

<div className="card padding">
<div className="text-larger padding">Animated Width</div>
<input className="input bordered light animate-width padding" placeholder="view full width."/>
</div>      

    </div>
</div>

<Footer />

</div>
</div>
        </section>
    );
}

export default input;