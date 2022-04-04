import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import {
   Container,
   LinkStyle
   } from "./style";
import {ThreeDots} from 'react-loader-spinner';
import Logo from "../../assets/logo.svg";
import api from "../Axios"
import useState from "react";


export default function Login (){
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [loading,setLoading]= useState("false")
    const navigate = useNavigate();
   

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    const promise = api.login({ ...formData });
    promise.then((response) => {
      setLoading(false);

      login(response.data);
      navigate("/today");
    });
    promise.catch(() => {
      setLoading(false);

      alert('Erro! Confira seus dados preenchidos.');
    });
  }

  return (
        <Container>
          <form onSubmit={handleSubmit}>
            <img src={Logo} alt="Logo"/>
            <Input
             type = "text"
             placeholder = "email"
             onChange={handleChange}
             disabled={loading}
             value={formData.email}/>
            <Input
             type = "text"
             placeholder = "senha"
             onChange={handleChange}
             disabled={loading}
             value={formData.password}/>
            <Button 
            type="submit"
            disabled={loading}>
                {
                    loading
                    ?<ThreeDots color="#FFFFFF" height="11" width="43" /> 
                    :"Entrar"}
             </Button>
             </form>
            <LinkStyle to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </LinkStyle>
        </Container>
        
    );

}
