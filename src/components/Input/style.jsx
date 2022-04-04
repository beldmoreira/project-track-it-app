import styled from "styled-components";

const InputStyle = styled.input`
height: 178.38323974609375px;
width: 180px;
border: 1px solid #D4D4D4
background-color: ${props => props.disabled ? '#F2F2F2' : '#FFFFFF'};
::placeholder {
    background-color: #FFFFFF;
    color:${props => props.disabled ? '#AFAFAF' : '#DBDBDB'};
    font-family: Lexend Deca;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export{
    InputStyle
}
