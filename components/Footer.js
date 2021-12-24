<<<<<<< HEAD
import Link from "next/link";
import Logo from "./Logo"
=======
>>>>>>> 19439f74c65240dd15410e058ab37f3103ed36a6

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer  className="padding-top-50 padding-bottom-20 text-small">
          <div className="container">
<<<<<<< HEAD
            <div className="row">
              <div className="col sm-12 md-8 lg-8 padding">
              <div className="section">
              <div><Logo /></div>
=======
            <div className="text-center">
           
           <i className="fab fa-facebook footer-icon pointer icon size-1"></i>
           <i className="fab fa-instagram footer-icon pointer icon size-1"></i>
           <i className="fab fa-twitter footer-icon pointer icon size-1"></i>
         
            </div>
            <div className="section text-center">
>>>>>>> 19439f74c65240dd15410e058ab37f3103ed36a6
              Fun css is a modern responsive css framework, it will ease your work in developing
              websites, it comes with pre-defined class names which are use to style your website. 
              You can download the framework for free and use our website themes and components for free.
              <a href="/app/funcss.apk">
                <div className="border section fit-width fit-height padding text-black hover-indigo hover-text-white pointer">
                  Download Application <i className="fab fa-android text-large icon size-2 text-green "></i>
                </div>
              </a>
<<<<<<< HEAD
              <div className="">
           
           <i className="fab fa-facebook footer-icon pointer icon size-1"></i>
           <i className="fab fa-instagram footer-icon pointer icon size-1"></i>
           <i className="fab fa-twitter footer-icon pointer icon size-1"></i>
         
            </div>
            </div>
              </div>
              <div className="col sm-12 md-4 lg-4">
                <div className="container">
                <div className="h4 padding">Guides</div>
                <div className="hr"></div>
                <Link href="/gettingstarted">
                  <a className="text-black"><div className="hoverable padding">Getting Started</div></a>
                </Link>
                <Link href="/themes">
                  <a className="text-black"><div className="hoverable padding">Our Themes</div></a>
                </Link>
                <a className="text-black"  href="https://github.com/fun-css"><div className="hoverable padding">Our Github Repo</div></a>
                </div>
              </div>
            </div>

=======
            </div>
>>>>>>> 19439f74c65240dd15410e058ab37f3103ed36a6
          <div className="row">
              <div className="col sm-12 md-8 lg-8">
              <div>
                &copy;{year} Funcss, All rights reserved
            </div>
              </div>
              <div className="col sm-12 md-4 lg-4">
<<<<<<< HEAD
               <div className="text-center">
                 <a className="text-black" href="https://github.com/fun-css/funcss/blob/main/LICENSE">MIT License</a>
=======
               <div>
                 <a className="text-black" href="https://github.com/funtechs/Funcss/blob/560f4f1b8b4b915c31adf464cb1d71ceb0f48bfa/LICENSE">MIT License</a>
>>>>>>> 19439f74c65240dd15410e058ab37f3103ed36a6
               </div>
              </div>
          </div>
          </div>
        </footer>
    );
}

export default Footer;