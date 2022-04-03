import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
min-height: 100vh;
width: 100%;
padding: 36px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #FFFFFF;
`;
const LinkStyle = styled(Link)`
height: 17px;
margin-top: 25px;
display: flex;
justify-content: center;
align-items: center;
color: #52B6FF;
text-decoration-line: underline;
`;

export{
    Container,
    LinkStyle
}