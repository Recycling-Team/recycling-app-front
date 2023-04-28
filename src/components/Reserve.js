import reservationsService from '../services/reservations'

const Reserve =  (item, loggedUser)  => {

    

    const newObject = {
        user_id: loggedUser,
        item_id: item.item_id,
        
    }
    
    
    
    reservationsService
        .update(newObject,item)
        .then(newObject =>{
            alert(`item ${item.item_name} reserved!`)
            console.log(newObject)
            console.log('reservation saved!')
        })
        .catch(error => {
            alert(`unable to reserve item ${item.item_name}`)
            console.log('reservation failed')
            console.log(error)
        })
    

}

export default Reserve