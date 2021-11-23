import React from 'react';

function Footer(props) {
    const year = new Date().getFullYear()
    return (
        <footer  className="padding-top-50 padding-bottom-20">
          <div className="container">
            <div className="text-center">
           
           <i class="fab fa-facebook footer-icon pointer icon size-1"></i>
           <i class="fab fa-instagram footer-icon pointer icon size-1"></i>
           <i class="fab fa-twitter footer-icon pointer icon size-1"></i>
         
            </div>
            <div className="section ">
              Fun css is a modern responsive css framework, it will ease your work in developing
              websites, it comes with pre-defined classes which are use to style your website. 
            </div>
          <div className="row">
              <div className="col sm-12 md-8 lg-8">
              <div>
                &copy;{year} Funcss, All rights reserved
            </div>
              </div>
              <div className="col sm-12 md-4 lg-4">
               <div>
                 <a className="text-black" href="https://github.com/funtechs/Funcss/blob/560f4f1b8b4b915c31adf464cb1d71ceb0f48bfa/LICENSE">MIT License</a>
               </div>
              </div>
          </div>
          </div>
        </footer>
    );
}

export default Footer;