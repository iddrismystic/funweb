import React from 'react';
import Footer from '../components/Footer';

function Container(props) {
   
    return (
        <section>
                        <div className="content-wrapper">
            <div className="sub-content padding">
             <div className="border padding height-200 content-middle light">
             <div id="container-8d57e29ac6d83235f85eb4edfe6a7df6">Ads</div>
             </div>
             <div className="section">
               <a href="#introduction" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Introduction</div></a>
               <a href="#container" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Container</div></a>
               <a href="#containerNote" className="link text-black block"> <div className="padding text-lighter hover-left-indigo right-link">Note</div></a>
             </div>
            </div>
                <div className="main-content">
                <div className="container">
             <div className="header h1 text-lighter text-indigo">
                 Container
             </div>
             <div className="h4">
                Containers wrap your content with 10% margin<br /> at both sides.
             </div>

             <div className="section hr">
   
             </div>
            </div>

<div className="container" id="introduction">
<div className="note">
         <div className="text-larger">What Containers Do</div>
     <div>
        Containers give 10% margin to both left and right, using containers
        centralizes your content and gives them a better view.
     </div>
  </div>

</div>

<div className="container" id="container">
    <div className="code">
        <xmp>
            {`
    <div class="padding light">
    <div class="container">
     <div class="padding indigo text-white section">
       <h3>I'm in a container</h3>
       <div>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos minima vel ea reprehenderit dolores. Perspiciatis at dolore sit.
       </div>
     </div>
    </div>
    <div class="">
     <div class="padding blue text-white section">
       <h3>I'm not in a container</h3>
       <div>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos minima vel ea reprehenderit dolores. Perspiciatis at dolore sit.
       </div>
     </div>
    </div>

   </div>
    `}
        </xmp>
    </div>
    <div className="preview">
        <div className="padding light">
         <div className="container">
          <div className="padding section">
            <div className="h2">Im in a container</div>
            <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos minima vel ea reprehenderit dolores. Perspiciatis at dolore sit.
            </div>
          </div>
         </div>
         <div>
          <div className="padding section">
            <div className="h2">Im not in a container</div>
            <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quam numquam facilis, harum accusantium alias placeat quod officiis nobis mollitia eos minima vel ea reprehenderit dolores. Perspiciatis at dolore sit.
            </div>
          </div>
         </div>

        </div>
    </div>
</div>

<div className="container padding-top-20" id="containerNote">
    <div className="note">
        <div className="note-title">Note</div>
        <div>
            It is good to wrap your contents in a container, because contents in a container normally give a better view than those that are not wrap in a container.
        </div>
    </div>
</div>

<Footer />
                </div>

                </div>
        </section>
    );
}

export default Container;