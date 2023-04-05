import axios from 'axios'

const baseUrl = 'https://recycle-app-back-92873459875.azurewebsites.net/api'

let userId

const getAll = () => {
   const request = axios.get(`${baseUrl}/getusers`)
   return request.then(response => response.data)
}

const create = newUser => {
   const request = axios.post(`http://localhost:3001/users`, newUser)
   return request.then(response => response.data)
}

const add = loggedUser => {
   const request = axios.post(`http://localhost:3001/users`, loggedUser)
   return request.then(response => response.data)
}

const getUser = () => {
   console.log(userId)
   const request = axios.get(`http://localhost:3001/users/${userId}`)
   return request.then(response => response.data)
}

const set = (user) => {
   userId = user
   console.log(userId)
   return
}

export default {
   getAll,
   create,
   getUser,
   add,
   set
}