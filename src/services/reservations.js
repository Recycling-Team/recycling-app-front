import axios from 'axios'

const baseUrl = 'https://recycle-app-back-92873459875.azurewebsites.net/api'

//const baseUrl = 'http://localhost:3001'

const update = newObject => {
    const request = axios.post(`${baseUrl}/savereservation`, newObject)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(`${baseUrl}/reservations`)
    return request.then(response => response.data)
 }

export default {
    update,
    getAll
}
