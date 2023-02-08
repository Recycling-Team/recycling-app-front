import { useState, Button } from 'react';


function Create() {

    const [item, setItem ] = useState({
        name:'', description: '', picture:''
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
                value={item.name}
                onChange={e => handleInputChange(e)}
                />
                <p>description:</p>
                <input
                name="description"
                value={item.description}
                onChange={e => handleInputChange(e)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Create;