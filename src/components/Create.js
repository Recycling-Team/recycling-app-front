import { useState } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import { Button } from '@mui/material';
import Text from './Text.js'
import Input from './Input.js'
import Header from './Header.js'




function Create() {

    const [item, setItem ] = useState({
       item_name:'',condition:'', description: '', category:'', reservation: null
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
        setItem({
            item_name:'', condition:'', description: '', category:'', reservation: null
        })
    }

    return (
        <div className="homebody">
            <Header text='Create a listing'/>
            <form onSubmit={addItem}>
                <Text text='Name'/>
                <Input 
                    id='item_name' 
                    name='item_name' 
                    type='text' 
                    value={item.item_name} 
                    onchange={e=>handleInputChange(e)}
                />
                <Text text='Condition'/>
                <Input
                    id='condition'
                    name='condition'
                    type='text'
                    value={item.condition}
                    onchange={e => handleInputChange(e)}
                />
                <Text text='Description' />
                <input
                    id='description'
                    name='description'
                    type='text'
                    value={item.description}
                    onChange={e => handleInputChange(e)}
                />
                <Text text='Category'/>
                <input
                    id='category'
                    name='category'
                    type='text'
                    value={item.category}
                    onChange={e => handleInputChange(e)}
                />
                <br/>
                <input type="submit" value="submit" />
            </form>
        </div>
        
    )
}

export default Create;