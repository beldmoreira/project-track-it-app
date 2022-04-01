import { MenuBar } from "./style";
import ProgressCircle from "../ProgressCircle";


export default function Menu(){
    return(
        <MenuBar>
            <span> Hábitos </span>
            <ProgressCircle/>
            <span> Histórico </span>
        </MenuBar>

    );
}