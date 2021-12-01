import React from 'react';
import Image  from 'next/image';

function Logo() {
    return (
        <div>
            <span>
                <Image src="/icons/fun.png" width={30} height={30} alt="funcss logo"/>
             <span className="logo montserrat">Funcss </span>
            </span>
        </div>
    );
}

export default Logo;