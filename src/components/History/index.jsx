import {
     SectionName,
     Container,
     CalendarSpace,
     CalendarStyle
     } from "./style";
import {ThreeDots} from 'react-loader-spinner';     
import {
     useState,
     useEffect
     } from "react";
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import api from "../Axios"

export default function History(){
    const[history,setHistory]= useState(null);
    const[selectedDate,setSelectedDate]= useState()

    useEffect(() => {
        const promise = api.getHabitsHistory();
        promise.then((response) => {
          setHistory(response.data);
        });
        promise.catch((error) => {
          console.log(error.response);
        });
    
         getTodayHabits();
      }, []);

      if (history==null){
        return (
        <ThreeDots color="#FFFFFF" height="11" width="43"/>
        )
    }
    function getTodayHabits(){
        const promise = api.searchingTodayHabits()
        promise.then((response) => {
         const habitsCompleted = response.data.filter(habit => habit.done);
         progress(habitsCompleted.length, response.data.length);
          });
        
        return(
            <Container>
                <SectionName>
                    Histórico
                </SectionName>
                    <CalendarSpace>
                        <CalendarStyle
                        onChange={setSelectedDate}
                        value={selectedDate}
                        formatDay={(_, date) => dayjs(date).format('DD')}
                        />                  
                    </CalendarSpace>
            </Container>
        
        );
    
    }   
    
}
