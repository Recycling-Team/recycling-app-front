import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { Button } from '@mui/material';




function Create() {

    const [item, setItem ] = useState({
        item_name:'', reservation: null
    });

    const handleInputChange = (event) => {
        setItem({...item, [event.target.name]: event.target.value});
    }
    
    const save = (event) => {
        event.preventDefault();
        console.log(item);
    }

    return (
        <div className="body">
            <form onSubmit={save}>
                <p>name:</p>
                <input
                name="name"
                value={item.item_name}
                onChange={e => handleInputChange(e)}
                />
                <input type="submit" value="Submit" />
            </form>
            <Link to="/"><Button variant='contained'>Home</Button></Link>
        </div>
    )
}

export default Create;