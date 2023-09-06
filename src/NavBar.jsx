import React from 'react';
import logo from './Styles/assets/images/logo.svg';
import {useState} from 'react';

export default function NavBar(){

    const buttonNames = ['Home', 'New', 'Popular', 'Trending', 'Categories'];
    const [hooverInput, setHoverInput] = useState(false);

    return(    <div className='NavBar-Container'>
        
        {/* W logo Image */}
        <img className='Logo-Container' src= {logo} alt = 'W logo' />
    
        {/* Buttons/Sections  */}
        <div className='Buttons-Container'>
            {buttonNames.map((buttonName)=>(
                 <button 
                 key={buttonName}
                 onMouseEnter={() => setHoverInput(buttonName)}
                 onMouseLeave={() => setHoverInput(null)}
                 className={`ButtonNav-S ${hooverInput === buttonName ? 'ButtonHoover-S' : ''}`}>
                    
                {buttonName}

                 </button>
            ))}

           
        </div>

    </div>)

}