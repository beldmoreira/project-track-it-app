import Input from "../Input";
import Button from "../Button";
import Logo from "../../assets/logo.svg";
import { Container, LinkStyle } from "./style";


export default function Register(){
    const navigate = useNavigate();

    return(
        <>
        <Container>
        <Logo/>
            <form onSubmit={handleSubmit}>
                <Input
                type= "text"
                placeholder="email"
                />
                <Input
                type= "text"
                placeholder="senha"
                /> 
                <Input
                type= "text"
                placeholder="nome"
                />
                <Input
                type= "text"
                placeholder="foto"
                />
                <Button>
                Cadastrar
                </Button>
            </form>
                <LinkStyle to="/" >
                Já tem uma conta? Faça login!
                </LinkStyle>
            </Container>
        </>
    );
}