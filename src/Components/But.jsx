import React from "react";
import "../index.css";

function But(props){

    return(
        <button className="but" onClick={props.onClick}>
        Toolbar
    </button>
    )
}

export default But;