import { Button } from "@mui/material";
import Reserve from './Reserve'
import DeleteItem from './DeleteItem'


const ButtonOptions = ({ item, loggedUser}) => {

    if (loggedUser === undefined ) {
        return
    }
    if (loggedUser === null) {
        return
    }
    if (item.user !== loggedUser) {
        return (
            <Button variant="contained" onClick={() => Reserve(item, loggedUser)}>Reserve</Button>
        )
    } else {
        return (
            <Button variant="contained" color="error" onClick={() => DeleteItem(item)}>Delete</Button>
        )
    }
}

export default ButtonOptions