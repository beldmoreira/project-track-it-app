import Input from "..Input/";
import Button from "../Button";
import {logo} from "../../../public/assets/logo.svg";
import login from "../Axios"
import useState from "react";




export default function Login (){
    const [email,setEmail]= useState(" ");
    const [password,setPassword]= useState("");
    return(
        <>
        <logo/>
        <Input type = "text" placeholder = "email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        <Input type = "text" placeholder = "senha" onChange={(e) => setPassword(e.target.value)} value={password}/>
        </>
    );

}