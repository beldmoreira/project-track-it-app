import styled from "styled-components";

const Container=styled.div`
width: 100%;
height: 90px;
padding: 15px;
border-radius: 5px;
margin: 20px 0 10px 0;
position: relative;
background: #FFFFFF;
  img {
    width: 15px;
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;
const HabitTitle= styled.span`
font-size: 20px;
font-weight: 400;
line-height: 25px;
letter-spacing: 0em;
color: #666666;
word-break: break-all;
`;

const AnswerNoHabits= styled.span`
font-size: 18px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
background: #666666;
`;
const Days=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;
const DaysStyle= styled.div`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
font-size: 19.976px;
color: #DBDBDB;
cursor: pointer;
`;

export{
    Container,
    HabitTitle,
    AnswerNoHabits,
    Days,
    DaysStyle
}