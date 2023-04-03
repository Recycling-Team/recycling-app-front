import itemsService from '../services/items'


const DeleteItem =  item  => {
    console.log(item)
    itemsService
        .deleteItem(item.item_id)
        .then(response => {
            alert(`${item.item_name} was deleted!`)
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}

export default DeleteItem