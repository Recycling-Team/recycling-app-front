import axios from 'axios'

const baseUrl = 'https://recycle-app-back-92873459875.azurewebsites.net/api'

//const baseUrl = 'http://localhost:3001'

const update = newObject => {
    const request = axios.post(`${baseUrl}/addreservation`, newObject)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(`${baseUrl}/reservations`)
    return request.then(response => response.data)
 }

 const getReservationsByItemId = (itemId, userId) => {
    const request = axios.get(`${baseUrl}/reservation-by-item_id`, {
      params: {
        item_id: itemId,
        user_id: userId
      }
    })
    return request.then(response => response.data)
  }

  

export default {
    update,
    getAll,
    getReservationsByItemId 
}
