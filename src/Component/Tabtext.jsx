import React from "react";




function Tabtext(props)
{
    return(
        <div style={{display:"flex",flexDirection:"row"}}>
            <div style={{lineHeight:'0.9'}}>
                <p>{props.date}</p>
                <p>{props.year}</p>
            </div>
        <div style={{marginLeft:'35px',lineHeight:'1.2'}}>
       <h3>{props.heading}</h3>
       <p> {props.description}</p>

      
       </div>
       </div>
    )
}
export default Tabtext;