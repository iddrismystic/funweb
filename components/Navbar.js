import Logo from './Logo';
import Image  from 'next/image';
import  Link from 'next/dist/client/link';
function Navbar() {
    return (
        <nav className="width-100-p fixed-top white navbar">
            <div className="container">
            <div className="navigation-bar">
   <div className="nav-logo">
       <Logo />
   </div>
     <div className="padding hide-medium-down">
  <a className="nav-link" href="#">Docs</a>
  <a className="nav-link" href="#">Themes</a>
  <a href="https://codeload.github.com/funtechs/Funcss/zip/refs/heads/main" className="text-indigo">Download v1.0</a> <a><img src="/icons/github.png" style={{height:'25px'}} className="icon fit" alt="github" /></a>

    
     </div>
     
</div>
            </div>

        </nav>
    );
}

export default Navbar;