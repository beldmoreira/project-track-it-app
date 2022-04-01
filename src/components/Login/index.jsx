import Input from "../Input";
import Button from "../Button";
import { Container, LinkStyle } from "./style";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import Logo from "../../assets/logo.svg";
import api from "../Axios"
import useState from "react";



export default function Login (){
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    api.login
    
    return(
        <>
        <Container>
            <img src={Logo} alt="Logo"/>
            <Input
             type = "text"
             placeholder = "email"
             onChange={(e) => setEmail(e.target.value)}
             value={email}/>
            <Input
             type = "text"
             placeholder = "senha"
             onChange={(e) => setPassword(e.target.value)}
             value={password}/>
            <Button type="submit">
                {<Loader type="ThreeDots" color="#FFFFFF" height={50} width={50} />} Entrar
             </Button>
            <LinkStyle to="/cadastro">Não tem uma conta? Cadastre-se! </LinkStyle>
        </Container>
        </>
    );

}