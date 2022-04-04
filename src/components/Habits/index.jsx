import Delete from "../../assets/delete.svg";
import {
  Container,
  HabitTitle,
  Days,
  DaysStyle,
  AnswerNoHabits
} from "./style"
import Header from "../Header";


export default function Habit({ id, habit, days }) {
  

    const weekDays = [
      { "id": 0, "day": "D" },
      { "id": 1, "day": "S" },
      { "id": 2, "day": "T" },
      { "id": 3, "day": "Q" },
      { "id": 4, "day": "Q" },
      { "id": 5, "day": "S" },
      { "id": 6, "day": "S" }
    ]

    return (
      <>
      <Header/>
        <Container>
        <HabitTitle>{habit}</HabitTitle>
        <Days>
          {weekDays.map(weekDay => (
            <DaysStyle key={weekDay.id} isSelected={days.includes(weekDay.id)}>{weekDay.day}</DaysStyle>
          ))}
        </Days>
  
        <img src={Delete} onClick={() => handleDeleteHabit(id)} alt="Delete icon"/>
        </Container>
        </>
    );
  }  
  function HabitsList({ habits}){
    if(habits.length == 0)
    return(
        <AnswerNoHabits>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
      </AnswerNoHabits>
    );
}

