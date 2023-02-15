import React, { useEffect, useState } from "react";


export default function DropDown() {
const [users, setUsers] = useState([]);


useEffect(() => {
    const fetchItems = async () => {
        try{
           const response = await fetch('http://localhost:8080/users');
           const json = await response.json();
           setUsers(json);
           console.log(json);
        } catch (error) {
           console.error(error);
        }
     };
     fetchItems();
  }, [])

const handleChange = (event) => {
console.log(event.target.value);
}


  return(
    <>
 <select defaultValue={'DEFAULT'} onChange={e => handleChange(e)}>
 <option value="DEFAULT" disabled>Users</option>
{users.map(user => (
<option value={user.user_name} key={user.user_id}>{user.user_name}</option>
))
}

 </select>
    
    
    </>
  );

}