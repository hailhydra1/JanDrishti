import React, { useContext } from "react";
import {Routes, Route} from "react-router-dom"
import { JanDrishtiContext } from "../context/Context";

function AppRouter(){
    const {userState} = useContext(JanDrishtiContext);
    return(
        <Routes>
            
        </Routes>
    )
}

export default AppRouter;