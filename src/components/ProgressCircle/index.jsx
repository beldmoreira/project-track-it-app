import { CircularProgress } from "./style";
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



export default function ProgressCircle(){
    const { progress } = useProgress();
    
    return(
        <CircularProgress>
            <CircularProgressbar
              value={progress}
              text={"Hoje"}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
              })}
            />
        </CircularProgress>      

    );
}