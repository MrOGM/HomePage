import React from "react";
import { Articles } from "./Info";
import './ArticlesCards.css';
import { useState } from "react";

export default function ArticlesCards(){
    const [hooverInput, setHoverInput] = useState(false);
    
    return(

        <div className="Articles-C">
            {Articles.map((item)=>(
                <div className="Article-C">
                    <img src={item.img} alt = {item.alt} />
                    <div className="text-C">
                        <h5 className="number-S">{item.id}</h5>
                        <h6 
                            key={item.title}
                            onMouseEnter={() => setHoverInput(item.title)}
                            onMouseLeave={() => setHoverInput(null)}
                            className={`${hooverInput === item.title ? 'titleSideNew2-S' : 'titleSideNew-S'}`}>
                                {item.title}
                                
                        </h6>
                        <p className="textSideArticles-S">{item.text}</p>
                    </div>
                </div>

            ))}

        </div>
    )

}