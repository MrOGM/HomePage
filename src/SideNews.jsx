import React from "react";
import './SideNews.css';
import { SideNewsInfo } from './Info'
import { useState } from "react";

export default function SideNews(){

    const [hooverInput, setHoverInput] = useState(false);
    
    return(
        <div className="SideNews-C">
            <h3 className="New-S">New</h3>
            
            {SideNewsInfo.map((item)=>(
                <div className="New-C" key ={item.title}>
                    <h4 
                        key={item.title}
                        onMouseEnter={() => setHoverInput(item.title)}
                        onMouseLeave={() => setHoverInput(null)}
                        className={`${hooverInput === item.title ? 'title2-S' : 'title-S'}`}
                           
                    >{item.title}
                    
                    </h4>
                    <h5 className="sub-S">{item.sub}</h5>
                    <hr className={`hr-S ${item.title === 'Is VC Funding Drying Up?' ?'hrnon-S' :''}`}></hr>
                </div>
            ))}

        </div>
    )
    

}