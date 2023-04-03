import axios from 'axios'

const baseUrl = 'https://recycle-app-back-92873459875.azurewebsites.net/api'

//const baseUrl = 'http://localhost:3001'

const getAll = () => {
    const request = axios.get(`${baseUrl}/getitems`)
    return request.then(response => response.data)
}

const addItem = newObject => {
    const request = axios.post(`${baseUrl}/add-item`, newObject)
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
    deleteItem
}