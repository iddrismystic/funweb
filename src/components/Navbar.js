import React from 'react';
import Logo from './Logo';

function Navbar() {
    return (
        <nav className="width-100-p z-index-5">
        <div class="navbar row white sticky-top">
        <div class="nav-logo">
            <Logo />
        </div>
        <div class="navbar-middle text-center">
            <a href="" class="nav-link text-black margin-left-20 padding hover-text-blue">Home</a>
            <a href="themes.html" class="nav-link text-black padding hover-text-blue vr">Templates</a>
            <a href="#team" class="nav-link text-black padding hover-text-blue vr">Team</a>
            <a href="#contact" class="nav-link text-black padding hover-text-blue vr">Contact</a>
        </div>
        <div class="navbar-right">
   
        </div>
        <div class="toggle-sidebar text-xx-large">
            <button class="sidebar-trigger button">
                <span class="material-icons icon size-2">
               menu
                </span></button>
        </div>
    </div>
        </nav>
    );
}

export default Navbar;