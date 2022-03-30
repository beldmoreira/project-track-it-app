import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function createConfig(token) {
    return { headers:
         { Authorization: `Bearer ${token}` } };
  }

function gettingRegistered (){
  const promise = axios.post(`${url}/auth/sign-up`);
  return promise;

}

function login (){
  const promise = axios.post(`${url}/auth/login`);
  return promise;
}

function creatingHabits (){
  const promise = axios.post(`${url}/habits`);
  return promise;
}

function listingHabits (){
  const promise = axios.get(`${url}/habits`);
  return promise;
}

function deletingHabits (id){
  const promise = axios.delete(`${url}/habits/${id}`);
  return promise;
}

function searchingTodayHabits (){
  const promise = axios.get(`${url}/habits/today`);
  return promise;
}

function checkingHabitsDone (id){
  const promise = axios.post(`${url}/habits/${id}/check`);
  return promise;
}

function uncheckingHabits (id){
  const promise = axios.post(`${url}/habits/${id}/uncheck`);
  return promise;
}

function getHabitsHistory (){
  const promise = axios.get(`${url}/habits/history/daily`);
  return promise;
}



const api = {
  createConfig,
  gettingRegistered,
  login,
  creatingHabits,
  listingHabits,
  deletingHabits,
  searchingTodayHabits,
  checkingHabitsDone,
  uncheckingHabits,
  getHabitsHistory

}

export default api;



