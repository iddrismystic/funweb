import React from 'react';
import Image  from 'next/image';

function Logo() {
    return (
        <div>
            <div>
                <Image src="/icons/fun.png" width={30} height={30}/>
            </div>
        </div>
    );
}

export default Logo;