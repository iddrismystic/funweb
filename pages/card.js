import React from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';
import Head from "next/head"
function Card() {
    return (
        <section>
                    <Head>
          <title>Css Cards | Funcss Framework</title>
          <meta name='description' content='
        Create nice css and simple css cards, card with image, horizontal card, flip or fliping card and reveal content card. 
       ' />
    <meta
    name="keywords"
    content="fun, css, css margin, css padding, css, width, css show and hide content based on screen width"
    />
          </Head>
        <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding ads content-middle light">
             <div id="container-8efab60a26b5c40a3a52aab9bdb98896">Ads</div>
             </div>
             <div className="section">
               <a href="#simpleCard" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Card</div></a>
               <a href="#imageCard" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Simple Image Card</div></a> 
               <a href="#fabCard" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Fab In Card</div></a>
               <a href="#horizontalCard" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Horizontal Card</div></a>
               <a href="#cardReveal" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Card Reveal</div></a>
               <a href="#flipCard" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Flip Card</div></a>
            </div>
            </div>
                <div className="main-content">
                <div className="container">
             <h1 className="h1 header text-indigo">
                 Css Card - Funcss Framework
             </h1>
             <div className="h4">
               Create simple css cards, card with image, fab in card, horizontal card, fliping card and reveal content card
             </div>

             <div className="section hr">
    
             </div>
            </div>


<div className="container padding-top-40" id="simpleCard">
    <div className="h4 topic">Simple Card</div>
    <div className="code">
      <xmp>{`<div class="card hover-shadow indigo padding text-white">
    <div class="text-x-large">Card Title</div>
    <div class="card-body">
        This is a simple card that mat be use to display a simple information.
        Lorem ipsum dolor sit amet consectetur tempore ratione omnis in voluptates, deleniti eius consectetur quod.
        Lorem ipsum dolor sit amet consectetur tempore ratione omnis in voluptates, deleniti eius consectetur quod.
    </div>
    <div class="hr"></div>
    <div class="card-footer">
        <a href="#" class="text-white">Link One</a>
        <a href="#" class="text-white">Link Two</a>
        <a href="#" class="text-white">Link Three</a>
    </div>
              
</div>`}</xmp>
    </div>
    <div className="preview">
    <div className="card hover-shadow indigo padding text-white">
        <div className="text-x-large">Card Title</div>
        <div className="card-body">
            This is a simple card that mat be use to display a simple information.
            Lorem ipsum dolor sit amet consectetur tempore ratione omnis in voluptates, deleniti eius consectetur quod.
            Lorem ipsum dolor sit amet consectetur tempore ratione omnis in voluptates, deleniti eius consectetur quod.
        </div>
        <div className="hr"></div>
        <div className="card-footer">
            <a href="#" className="text-white">Link One</a>
            <a href="#" className="text-white">Link Two</a>
            <a href="#" className="text-white">Link Three</a>
        </div>
      
</div>

    </div>
</div>

<div className="container padding-top-40" id="imageCard">
    <div className="h4 topic">Simple Image Card</div>
    <div className="code">
<xmp>{`<div class="card width-300">
    <div class="relative">
        <img src="images/deo.jpg" class="width-100-p height-200" />
        <div class="text-large card-title text-white">Card Title</div>
    </div>

    <div class="padding">
    This is have a Title on top of the image.
    You can use this card to display informtion about a person or a team.
    </div>
</div>`}</xmp>
    </div>
    <div className="preview">
    <div className="card width-300">
            <div className="relative">
                <img src="/images/deo.jpg" alt="simplecsscard" className="width-100-p height-200" />
                <div className="text-large card-title text-white">Card Title</div>
            </div>
      
            <div className="padding">
            This is have a Title on top of the image.
            You can use this card to display informtion about a person or a team.
            </div>
    </div>

    </div>
</div>
<div className="container padding-top-40" id="fabCard">
    <div className="h4 topic">Fab In Card</div>
    <div className="code">
        <xmp>
            {`
    <div class="card width-300 hover-shadow">
    <div class="relative">
        <img src="images/deo.jpg" class="width-100-p height-200" />
        <div class="text-large card-title text-white">Card Title</div>
        <div class="text-large card-fab"> <button class='button indigo card text-white float height-40 width-40'>Fab</button></div>
    </div>

    <div class="padding">
    This is have a Title on top of the image with a floating button.
    You can use this card to display informtion about a person or a team.
    </div>
</div>
            `}
        </xmp>
    </div>
    <div className="preview">
    <div className="card width-300 hover-shadow">
            <div className="relative">
                <img src="/images/deo.jpg" alt="css card" className="width-100-p height-200" />
                <div className="text-large card-title text-white">Card Title</div>
                <div className="text-large card-fab"> <button className='button indigo card text-white float height-40 width-40'>Fab</button></div>
            </div>
      
            <div className="padding">
            This is have a Title on top of the image with a floating button.
            You can use this card to display informtion about a person or a team.
            </div>
        </div>

    </div>
</div>
<div className="container padding-top-40" id="horizontalCard">
    <div className="h4 topic">Horizontal Card</div>
    <div className="code">
        <xmp>
         {`<div class="card horizontal hover-shadow">
        <div>
             <img src="images/deo.jpg" class="responsive" />
        </div>
      
            <div class="card-body">
               <div>
                This card displays its content in a row.
                Just add the class horizontal to use this kind of card
              </div>
            <div class="card-footer">
            <a href="#" class="text-indigo">Link One</a>
            <a href="#" class="text-indigo">Link Two</a>
            <a href="#" class="text-indigo">Link Three</a>    
            </div>
           </div>
 </div>`}
        </xmp>
    </div>
    <div className="preview">
    <div className="card horizontal hover-shadow">
        <div>
             <img src="images/deo.jpg" className="responsive" />
        </div>
      
            <div className="card-body">
               <div>
                This card displays its content in a row.
                Just add the class horizontal to use this kind of card
              </div>
            <div className="card-footer">
            <a href="#" className="text-indigo">Link One</a>
            <a href="#" className="text-indigo">Link Two</a>
            <a href="#" className="text-indigo">Link Three</a>    
            </div>
           </div>
 </div>

    </div>
</div>
<div className="container padding-top-40" id="cardReveal">
    <div className="h4 topic">Card Reveal</div>
    <div className="code">
        <xmp>
            {`
    <div class="card reveal fit-height text-white width-300 pointer">
    <div class="reveal-front indigo content-middle">
   <div>
   <h3>Jhon Deo</h3>
     <div>Use the content-middle class to bring the content to the center of your card</div>
   </div>
    </div>
    <img src="images/deo.jpg" class="width-100-p height-200" />
  </div>
            `}
        </xmp>
    </div>
    <div className="preview">
    <div className="card reveal fit-height text-white width-300 pointer">
    <div className="reveal-front indigo content-middle">
   <div >
   <h3>Jhon Deo</h3>
     <div>Use the content-middle className to bring the content to the center of your card</div>
   </div>
    </div>
    <img src="images/deo.jpg" className="width-100-p height-200" />
  </div>
    </div>
</div>
<div className="container padding-top-40" id="flipCard">
    <div className="h4 topic">Flip Card</div>
    <div className="code">
        <xmp>
            {`
    <div class="card flip text-white width-300  pointer">
      <div class="flip-inner height-200">
        <div class="flip-front">
          <img src="images/deo.jpg" class="width-100-p height-200" />
        </div>
        <div class="flip-back indigo height-200 content-middle">
          <div>Make sure to always give your flip-inner, flip-front and flip-back the same value of height.</div>
        </div>

      </div>
   
  </div>
            `}
        </xmp>
    </div>
    <div className="preview">
    <div className="card flip text-white width-300  pointer">
    <div className="flip-inner height-200">
     <div className="flip-front">
         <img src="images/deo.jpg" className="width-100-p height-200" />
    </div>
   <div className="flip-back indigo height-200 content-middle">
     <div>Make sure to always give your flip-inner, flip-front and flip-back the same value of height.</div>
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

export default Card;