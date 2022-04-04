import {
   LinkStyle,
   MenuCircle
} from "./style";
import {Link} from "react-router-dom";
import ProgressCircle from "../ProgressCircle";
import Footer from "../Footer";


export default function Menu(){
  
    return(
        <Footer>
          <LinkStyle to="/habitos">
             Hábitos
          </LinkStyle>
            <MenuCircle>
              <Link to ="hoje">
                <ProgressCircle/>
              </Link>
            </MenuCircle>
          <LinkStyle to="/historico">
             Histórico 
          </LinkStyle>
        </Footer>

    );
}
 