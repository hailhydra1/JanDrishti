import React, { useContext } from "react";
import {auth} from "../../controllers/firebaseConfig"
import { signOut } from "firebase/auth";
import { JanDrishtiContext } from "../context/Context";
import { Button } from "@nextui-org/react";

function Logout(){

    const {setUserLogin} = useContext(JanDrishtiContext)

    async function handleClick(){
        try {
            const result = await signOut(auth);
            console.log(result);
            setUserLogin(false)
            localStorage.removeItem("user")
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <Button onClick={handleClick} color="primary" >Logout</Button>
    )
}

export default Logout