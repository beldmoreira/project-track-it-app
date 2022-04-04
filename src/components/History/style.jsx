import styled from "styled-components";
import Calendar from "react-calendar";

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 18px;
    display: flex;
    flex-direction: column;
    background-color: #F2F2F2;
`;

const SectionName= styled.span`
    font-size: 23px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    color: #126BA5; 
    padding-top: 100px;
`;
const CalendarSpace= styled.div`
    height: 75%;
    margin-bottom: 30px;
`; 
const CalendarStyle =styled(Calendar)`
    width: 100%;
    height: 100%;
    margin-top: 12px;
    border: none;
    border-radius: 10px;
`;
export{
    Container,
    SectionName,
    CalendarSpace,
    CalendarStyle

}



