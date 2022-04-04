import { Navbar, UserAvatar } from "./style";
import Logo from "../../assets/logo2.svg" 
import { Link } from "react-router-dom";


export default function Header(){
    return(

        <>
            <Navbar>
                <img src={Logo} alt="Miniature logo"/>
                <Link to="/"/>
                <UserAvatar/>
            </Navbar>
        </>
    );
}
