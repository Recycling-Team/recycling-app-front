import { useState } from 'react';
import React from 'react';





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
        <div className="homebody">
            <h1>Create a listing</h1>
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
        </div>
        
    )
}

export default Create;