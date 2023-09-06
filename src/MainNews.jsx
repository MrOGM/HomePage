import React from 'react';
import './MainNews.css';
import MainImage from './Styles/assets/images/image-web-3-desktop.jpg';
import { useState } from 'react';


export default function MainNews(){

    const [hoover, setHoover] = useState(false);

    return(
        <div className='MainNews-C'>

            <img className='img-S' src={MainImage} alt= "Abstract "/>

            <h2 className='h1-S'> The Bright Future of Web 3.0?</h2>

            <div className='subHeading-C' >
                <h3 className='subHeading-S'>
                    We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                </h3>

                <button 
                    onMouseEnter={() => setHoover(!hoover)} onMouseLeave={() => setHoover(!hoover)}
                    className= {`btnReadMore-S ${ hoover ? `btnblack`:`btnred` }`} >
                        READ MORE
                </button>
            </div>

        </div>
    )

}
