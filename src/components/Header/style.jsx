import styled from "styled-components";

const Navbar = styled.header`
height: 70px;
width: 100%;
padding: 0px 18px;
left: 0px;
top: 0px;
position: fixed;
z-index: 1;
display: flex;
justify-content:space-between;
align-items: center;
flex-direction: column;
background-color: #126BA5;
box-shadow: 0px 4px 4px 0px #00000026;
    svg{
        height: 49px;
        width: 100%;
    }
`;

const UserAvatar= styled.div`
width: 51px;
height: 51px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor:pointer;
  }
`;
export{
    Navbar,
    UserAvatar
}
