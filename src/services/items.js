import axios from 'axios'
import usersService from '../services/users';

const baseUrl = 'https://recycle-app-back-92873459875.azurewebsites.net/api'
let user = usersService.getUser()
//const baseUrl = 'http://localhost:3001'

const getAll = () => {
    const request = axios.get(`${baseUrl}/items`)
    return request.then(response => response.data)
}

const addItem = newObject => {
    const request = axios.post(`${baseUrl}/add-item`, newObject)
    return request.then(response => response.data)
}

const itemsByUser = () => {
    const request = axios.get(`${baseUrl}/ItembyUser?user=${user.user_id}`)
    return request.then(response => response.data)
}

const deleteItem = itemId => {
    //const request = axios.delete(`${baseUrl}/${itemId}`)
    //return request.then(response => response.data)
    //ei vielä toimi bäckissä

    return
}

export default {
    getAll,
    addItem,
    deleteItem,
    itemsByUser
}