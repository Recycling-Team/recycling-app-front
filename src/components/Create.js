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
    };
    
    const saveItem = (item) => {
        fetch('http://localhost:8080/api/items', {
            method: 'POST',
            headers: {
                'Accept': 'application/jason',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res => console.log(item))
        .catch(err => console.error(err))
        
    }

    const addItem = (event) => {
        saveItem(item);
        event.preventDefault();
        console.log(item);
        
        
    }

    return (
        <div className="body">
            <form onSubmit={addItem}>
                <p>name:</p>
                <input
                id='item_name'
                name='item_name'
                type="text"
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