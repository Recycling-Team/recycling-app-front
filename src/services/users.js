import axios from 'axios'

const baseUrl = 'https://recycle-app-back-92873459875.azurewebsites.net/api'

//const baseUrl = 'http://localhost:3001'

//const baseUrl = 'http://localhost:7071/api'



const getAll = () => {
   const request = axios.get(`${baseUrl}/users`)
   return request.then(response => response.data)
}

const create = newUser => {
   console.log(newUser)
   const request = axios.post(`${baseUrl}/add-user`, newUser)
   return request.then(response => response.data)
}

const login = user => {
   console.log(user)
   const request = axios.get(`${baseUrl}/login`, {
      params: {
         name: user
      }
   })
   return request.then(response => response.data)
}

const getUser = () => {
   let userJson = localStorage.getItem("user");
   return userJson ? JSON.parse(userJson) : null;
}

const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
  let userJson = localStorage.getItem("user");
  console.log(userJson)
}

export default {
   getAll,
   create,
   getUser,
   login,
   setUser
}