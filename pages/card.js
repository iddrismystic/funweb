import React from 'react';
import Footer from '../components/Footer';

function Card() {
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
             <div className="text-big text-lighter text-indigo">
                 Card
             </div>
             <div className="h4">
               Cool Buttons Makes Your Website<br /> Reactive.
             </div>

             <div className="section hr">
    
             </div>
            </div>


<div class="container padding-top-40" id="simpleCard">
    <div class="header-3 text-indigo">Simple Card</div>
    <div class="code">
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
    <div class="preview">
    <div class="card hover-shadow indigo padding text-white">
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
      
</div>

    </div>
</div>

<div class="container padding-top-40" id="imageCard">
    <div class="header-3 text-indigo">Simple Image Card</div>
    <div class="code">
        <xmp>
            {`
<div class="card width-300">
    <div class="relative">
        <img src="images/deo.jpg" class="width-100-p height-200" />
        <div class="text-large card-title text-white">Card Title</div>
    </div>

    <div class="padding">
    This is have a Title on top of the image.
    You can use this card to display informtion about a person or a team.
    </div>
</div>
            `}
        </xmp>
    </div>
    <div class="preview">
    <div class="card width-300">
            <div class="relative">
                <img src="images/deo.jpg" class="width-100-p height-200" />
                <div class="text-large card-title text-white">Card Title</div>
            </div>
      
            <div class="padding">
            This is have a Title on top of the image.
            You can use this card to display informtion about a person or a team.
            </div>
    </div>

    </div>
</div>
<div class="container padding-top-40" id="fabCard">
    <div class="header-3 text-indigo">Fab In Card</div>
    <div class="code">
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
    <div class="preview">
    <div class="card width-300 hover-shadow">
            <div className="relative">
                <img src="images/deo.jpg" className="width-100-p height-200" />
                <div class="text-large card-title text-white">Card Title</div>
                <div class="text-large card-fab"> <button className='button indigo card text-white float height-40 width-40'>Fab</button></div>
            </div>
      
            <div class="padding">
            This is have a Title on top of the image with a floating button.
            You can use this card to display informtion about a person or a team.
            </div>
        </div>

    </div>
</div>
<div class="container padding-top-40" id="horizontalCard">
    <div class="header-3 text-indigo">Horizontal Card</div>
    <div class="code">
        <xmp>
         {`<div class="card horizontal hover-shadow">
        <div class="relative">
             <img src="images/deo.jpg" class="responsive" />
                <div class="text-large card-title text-white">Card Title</div>
        </div>
      
            <div class="card-body">
               <div>
                This card displays its content in a row.
                Just add the class horizontal to use this kind of card
                deleniti eius consectetur quod. Lorem ipsum dolor sit amet consectetur 
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
    <div class="preview">
    <div class="card horizontal hover-shadow">
        <div className="relative">
             <img src="images/deo.jpg" class="responsive" />
                <div class="text-large card-title text-white">Card Title</div>
        </div>
      
            <div class="card-body">
               <div>
                This card displays its content in a row.
                Just add the class horizontal to use this kind of card
                deleniti eius consectetur quod. Lorem ipsum dolor sit amet consectetur 
              </div>
            <div class="card-footer">
            <a href="#" class="text-indigo">Link One</a>
            <a href="#" class="text-indigo">Link Two</a>
            <a href="#" class="text-indigo">Link Three</a>    
            </div>
           </div>
 </div>

    </div>
</div>
<div class="container padding-top-40" id="cardReveal">
    <div class="header-3 text-indigo">Card Reveal</div>
    <div class="code">
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
    <div class="preview">
    <div class="card reveal fit-height text-white width-300 pointer">
    <div class="reveal-front indigo content-middle">
   <div >
   <h3>Jhon Deo</h3>
     <div>Use the content-middle class to bring the content to the center of your card</div>
   </div>
    </div>
    <img src="images/deo.jpg" class="width-100-p height-200" />
  </div>
    </div>
</div>
<div class="container padding-top-40" id="flipCard">
    <div class="header-3 text-indigo">Flip Card</div>
    <div class="code">
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
    <div class="preview">
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
    </div>
</div>

<Footer />
                </div>

                </div>
        </section>
    );
}

export default Card;