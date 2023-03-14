import reservationsService from '../services/reservations'

const Reserve =  item_id  => {

    var day = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    const date = `${day}.${month}.${year}`;

    const newObject = {
        user_id: 1,
        item_id: item_id,
        date: date
    }
    
    console.log(newObject)
    
    /*
    fetch('https://recycle-app-back-92873459875.azurewebsites.net/api/savereservation', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObject)
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
    */
    
    reservationsService
        .update(newObject)
        .then(newObject =>{
            console.log(newObject)
            console.log('reservation saved!')
        })
        .catch(error => {
            console.log('reservation failed')
            console.log(error)
        })
    

}

export default Reserve