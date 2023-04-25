import axios from 'axios'
import usersService from '../services/users';


const baseUrl = 'https://recycle-app-back-92873459875.azurewebsites.net/api'
let user = usersService.getUser()

//const baseUrl = 'http://localhost:3001'

    

const update = newObject => {
    const request = axios.post(`${baseUrl}/addreservation`, newObject)
    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(`${baseUrl}/reservations`)
    return request.then(response => response.data)
 }

 const getUnnotifiedReservations = () => {
    const request = axios.get(`${baseUrl}/unnotified-reservations?user_id=${user.user_id}`)
    return request.then(response => response.data)
 }

 const updateReservationNotification = async (reservation) => {
    fetch(`${baseUrl}/reservation-notified`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": reservation.user_id,
            "item_id": reservation.item_id,
            "date": reservation.date,
            "notification": reservation.notification
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))

};
 

export default {
    update,
    getAll,
    getUnnotifiedReservations,
    updateReservationNotification
}
