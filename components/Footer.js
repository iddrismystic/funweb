
function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer  className="padding-top-50 padding-bottom-20 text-small">
          <div className="container">
            <div className="text-center">
           
           <i className="fab fa-facebook footer-icon pointer icon size-1"></i>
           <i className="fab fa-instagram footer-icon pointer icon size-1"></i>
           <i className="fab fa-twitter footer-icon pointer icon size-1"></i>
         
            </div>
            <div className="section text-center">
              Fun css is a modern responsive css framework, it will ease your work in developing
              websites, it comes with pre-defined class names which are use to style your website. 
              You can download the framework for free and use our website themes and components for free.

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