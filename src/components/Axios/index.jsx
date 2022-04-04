import axios from "axios";

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function config(token) {
    return { headers:
         { Authorization: `Bearer ${token}` } };
  }

function gettingRegistered (body){
  const promise = axios.post(`${url}/auth/sign-up`,body);
  return promise;

}

function login (body){
  const promise = axios.post(`${url}/auth/login`,body);
  return promise;
}

function creatingHabits (body,token){
  const config = createConfig(token);
  const promise = axios.post(`${url}/habits`,body,config);
  return promise;
}

function listingHabits (token){
  const config = createConfig(token);
  const promise = axios.get(`${url}/habits`,config);
  return promise;
}

function deletingHabits (id,token){
  const config = createConfig(token);
  const promise = axios.delete(`${url}/habits/${id}`,config);
  return promise;
}

function searchingTodayHabits (token){
  const config = createConfig(token);
  const promise = axios.get(`${url}/habits/today`,config);
  return promise;
}

function checkingHabitsDone (id,token){
  const config = createConfig(token);
  const promise = axios.post(`${url}/habits/${id}/check`,config);
  return promise;
}

function uncheckingHabits (id,token){
  const config = createConfig(token);
  const promise = axios.post(`${url}/habits/${id}/uncheck`,config);
  return promise;
}

function getHabitsHistory (token){
  const config = createConfig(token);
  const promise = axios.get(`${url}/habits/history/daily`,config);
  return promise;
}

const api ={
  config,
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



