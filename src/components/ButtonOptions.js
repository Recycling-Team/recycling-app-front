import { Button } from "@mui/material";
import Reserve from './Reserve'
import DeleteItem from './DeleteItem'
import { useNavigate } from 'react-router-dom';

const ButtonOptions = ({ item, loggedUser}) => {

    const navigate = useNavigate();

    const handleReservation = (itemId) => {
      navigate(`/reservations/${itemId}`);
      Reserve(item, loggedUser);
    };

    if (loggedUser === undefined ) {
        return
    }
    if (loggedUser === null) {
        return
    }
    if (item.user !== loggedUser) {
        return (
          <Button variant="contained" onClick={() => handleReservation(item.item_id)}>
            Reserve
          </Button>
        );
      } else {
        return (
          <Button variant="contained" color="error" onClick={() => DeleteItem(item)}>
            Delete
          </Button>
        );
      }
    };
    
export default ButtonOptions