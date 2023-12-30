import React from "react";
import NamePlate from "../Components/Nameplate";
import Leftbar from "../Components/leftbar";

function Home(){

    return(
        <div className="layout">
            <NamePlate />
            <Leftbar />
        </div>
    )
}

export default Home;