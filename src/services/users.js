import axios from 'axios'

const baseUrl = 'https://recycle-app-back-92873459875.azurewebsites.net/api'

const getAll = () => {
   const request = axios.get(`${baseUrl}/getusers`)
   return request.then(response => response.data)
}

export default {
   getAll
}