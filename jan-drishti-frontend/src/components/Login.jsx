import React, { useContext } from "react";
import { JanDrishtiContext } from "../context/Context";
import {auth, provider} from "../../controllers/firebaseConfig"
import { signInWithPopup } from "firebase/auth";
import { Button } from "@nextui-org/react";


function Login(){
    const {setUserLogin, setUserDetails} = useContext(JanDrishtiContext)

    async function handleClick(){
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
            const user = {
                name: result.user.displayName,
                email: result.user.email,
                uid: result.user.uid,
                imageURL: result.user.photoURL
            }
            localStorage.setItem("user", JSON.stringify(user));
            setUserLogin(true);
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <Button onClick={handleClick} color="primary" variant="flat" >Login</Button>
    )
}

export default Login