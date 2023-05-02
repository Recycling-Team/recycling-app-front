import { NavLink } from "react-router-dom";
import '../NavBar.css'


const Navbar = () => {
   return (
     <nav className="navbar">
       <div className="container">
         <div className="logo">
            <NavLink to="/" className='logolink'>RecyclingApp</NavLink>
         </div>
         <div className="nav-elements">
           <ul>
             <li>
               <NavLink to="/">Home</NavLink>
             </li>
             <li>
               <NavLink to="/create">Create a listing</NavLink>
             </li>
             <li>
               <NavLink to="/itemlist">Items</NavLink>
             </li>
             <li>
               <NavLink to="/user">User</NavLink>
             </li>
             <li>
               <NavLink to='/login'>Log in</NavLink>
             </li>
           </ul>
         </div>
       </div>
     </nav>
   )
 }
 
 export default Navbar;