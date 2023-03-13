import { useState } from 'react';
import React from 'react';
import { Button } from '@mui/material';
import Text from './Text.js'
import Input from './Input.js'
import Header from './Header.js'
import CreateForm from './CreateForm'




function Create() {

    /*const [item, setItem ] = useState({
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
    }*/

    return (
        <CreateForm/>
    );
}

export default Create;