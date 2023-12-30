import React from "react";
import "../index.css";
import Imagesinfo from "./Imagesinfo.js";
import Createimage from "./Img.js";

function NamePlate(){

    return(
        <div className="gridct">
            <div className="cpname">Luminate Root</div>
            {Imagesinfo.map(Createimage)}
        </div>
    )
}

export default NamePlate;