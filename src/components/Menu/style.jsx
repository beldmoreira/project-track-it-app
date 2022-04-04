import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuCircle= styled.div`
    width: 100%;
    position:fixed;
    color: #52B6FF;
    display:flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;  
`;

const LinkStyle = styled(Link)`
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    margin: 0 36px;
`;

export{
    MenuCircle,
    LinkStyle
}