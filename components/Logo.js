import React from 'react';
import Image  from 'next/image';

function Logo() {
    return (
        <div>
            <span>
             <span className="icon fit"><Image src="/icons/fun.png" width={30} height={30} alt="funcss logo"/></span>
             <span className="logo montserrat">Funcss </span>
            </span>
        </div>
    );
}

export default Logo;