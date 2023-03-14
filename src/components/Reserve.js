import reservationsService from '../services/reservations'

const Reserve =  item  => {

    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    const date = `${day}.${month}.${year}`;

    const newObject = {
        user_id: 1,
        item_id: item.item_id,
        date: date
    }
    
    console.log(newObject)
    
    reservationsService
        .update(newObject)
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