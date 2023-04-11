import axios from 'axios'

const baseUrl = 'https://recycle-app-back-92873459875.azurewebsites.net/api'

//const baseUrl = 'http://localhost:3001'

const getAll = () => {
    const request = axios.get(`${baseUrl}/categories`)
    return request.then(response => response.data)
}

export default {
    getAll
}