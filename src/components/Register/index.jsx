import React from "react";
import Input from "../Input";
import Button from "../Button";
import Logo from "../../assets/logo.svg";
import { Container, LinkStyle } from "./style";
import { useNavigate } from "react-router-dom";
import useState from "react";
import { ThreeDots } from "react-loader-spinner";
import { gettingRegistered } from "../Axios";


export default function Register(){
    const [formData, setFormData] = useState({ name: '', email: '', password: '', photo: '' });
    const [loading,setLoading]= useState("false")
    const navigate = useNavigate();


    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }

    function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        const promise = gettingRegistered({
            ...formData
          });
        
          promise.then(() => {
            setLoading(false);
            navigate("/");
          });
          promise.catch(() => {
            setLoading(false);
            alert('Erro! Confira seus dados preenchidos.');
          });  
       
    }       
    
    return(
        <>
        <Container>
            <Logo/>
            <form onSubmit={handleSubmit}>
                <Input
                type= "text"
                placeholder="email"
                onChange={handleChange}
                value={formData.email}
                disabled={loading}
                />
                <Input
                type= "text"
                placeholder="senha"
                onChange={handleChange}
                value={formData.password}
                disabled={loading}
                /> 
                <Input
                type= "text"
                placeholder="nome"
                onChange={handleChange}
                value={formData.name}
                disabled={loading}
                />
                <Input
                type= "text"
                placeholder="foto"
                onChange={handleChange}
                value={formData.photo}
                disabled={loading}
                />
                <Button
                type="submit"
                disabled={loading}>
                    {
                        loading
                        ?<ThreeDots color="#FFFFFF" height="11" width="43" /> 
                        :"Cadastrar"}
                </Button>
            </form>
                <LinkStyle to="/" >
                Já tem uma conta? Faça login!
                </LinkStyle>
        </Container>
        </>
    );
}