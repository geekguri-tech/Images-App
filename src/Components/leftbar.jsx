import React, {useState} from "react";
import "../index.css";
import {createCard} from "./accesories.jsx";
import But from "./But.jsx";
import Contents from "./Contents.js";

function Leftbar(){
    const [isclicked, checkonclick] = useState(true);

    function setit(){
        checkonclick(!isclicked);
    }

    return (
    <div className="butfl">
            <But onClick={setit}/>
    <div className={isclicked ? "leftbar" : "leftbarex"}>
        { 
            Contents.map(createCard)}
    </div>
    </div>
    );
}

export default Leftbar;