import React from 'react';
import { useState } from 'react';
import Footer from '../components/Footer';
import Head from 'next/head';
function Modal(props) {
    const [modal, setmodal] = useState("-100%");
    const modalstyle = "`${modal}`"
    return (
        <div>
                    <section>
<Head>
   <title>Css Modals - Funcss Framework</title>
     <meta name='description' content='
      Create nice css modals with funcss framework, modals can be use to create login or signup forms.
       ' />
    <meta
    name="keywords"
    content="fun, css, card, slide, panel, slide panel"
    />
</Head>
              <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding ads content-middle light">
             <div id="container-8efab60a26b5c40a3a52aab9bdb98896">Ads</div>
             </div>
        <div className="section">
          <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
          <a href="#modal" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Modal</div></a> 
          <a href="#note" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Note</div></a>         </div>
       </div>
           <div className="main-content">
           <div className="container">
        <h1 className="header h1 text-lighter text-indigo">
          Css Modal - Funcss Framework
        </h1>
        <div className="h4">
          Modals are can be use to show information on popup.
          Create nice css modals with funcss framework, modals can be use to create login or signup forms.
        </div>

        <div className="section hr">

        </div>
       </div>

       
<div className="container padding-top-40" id="introduction">
<div className="h4 topic">Css Modal</div>
<div className="note">
    The <span className="badge">modal</span> class is use to create a modal.It wraps the <span className="badge">modal-content</span> class.
    which contains the content of your modal
</div>
<div className="code">
   <xmp>
{`<button class="button indigo text-white card" onclick="document.getElementById('modal1').style.display='block'">basic Modal</button>
<div class="modal" id="modal1">
<div class="close-modal text-bigger text-red" onclick="document.getElementById('modal1').style.display='none'">&times;</div>
<div class="modal-content width-400 indigo text-white padding">
<div class="h3">Modal Header</div>
<div>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
</div>
</div>
</div>`}
   </xmp>
</div>
<div className="code react">
   <xmp>
{`
import { useState } from 'react';
import Footer from './../components/Footer';
const App = ()=>{
const [modal, setmodal] = useState("none");
    return(
   <button className="button indigo text-white card" onClick={()=>setmodal("block")}>Open Modal</button>
   <div className="modal" style={{display:${modalstyle}}}>
   <div className="close-modal text-bigger text-red"  onClick={()=>setmodal("none")}>&times;</div>
   <div className="modal-content width-400 indigo text-white padding">
   <div className="h3">Modal Header</div>
   <div>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   </div>
   </div>
   </div>
    )
}
 `}
   </xmp>
</div>
<div className="preview" id="modal">
<button className="button indigo text-white card" onClick={()=>setmodal("100%")}>Open Modal</button>
   <div className="modal" style={{top:`${modal}`}}>
   <div className="close-modal text-bigger text-red"  onClick={()=>setmodal("none")}>&times;</div>
   <div className="modal-content width-400 indigo text-white padding">
   <div className="h3">Modal Header</div>
   <div>
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, cupiditate non tempore, ea a provident quidem maxime repellat maiores voluptas commodi debitis dolor quod, aliquam tenetur itaque id enim unde!
   </div>
   </div>
   </div>
</div>
</div>
 

<div className="container">
<div className="note" id="note">
    <div className="note-title">Note:</div>
    <div>
     Modals are good for Login forms, signup forms and displaying other relevant information to the user.
    </div>
</div>
</div>

<Footer />

</div>
</div>
   </section>
        </div>
    );
}

export default Modal;