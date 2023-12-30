import React from "react";
import "../index.css";

function Cimage(props){
    return(
        <div className={props.layclass}><img className="lpicsum" src={props.link} alt={props.name}></img></div>
    )
}

function Createimage(imagesinfo){
    return(
        <Cimage
        key={imagesinfo.key}
        layclass={imagesinfo.layclass}
        link={imagesinfo.link}
        name={imagesinfo.name}
        />
    )

}

export default Createimage;