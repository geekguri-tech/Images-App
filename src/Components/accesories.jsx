import React from "react";
import "../index.css";

function Access(props){
    return(
        <a className="one" href={props.link}>{props.name}</a>
    )
}

function createCard(content){
    return(
        <Access
        key={content.id}
        name={content.name}
        link={content.link}
        />
    )
}

export default Access;
export {createCard};