import React from 'react';
import Logo from './Logo';
import Image  from 'next/image';

function Navbar() {
    return (
        <nav className="width-100-p fixed-top white navbar">
            <div className="container">
            <div class="navigation-bar">
   <div class="text-x-large nav-logo">
       <Logo />
   </div>
     <div class="padding">
      <a href="#" class="nav-link">Docs</a>
      <a href="#" class="nav-link">Themes</a>
      <a href="">
          <img src="/icons/github.png" style={{height:'25px'}} class="icon fit" alt="github" />
      </a>
  
    
     </div>
     
</div>
            </div>

        </nav>
    );
}

export default Navbar;