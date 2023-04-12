import { NavLink } from "react-router-dom";
import '../NavBar.css'
import SearchBar from "./SearchBar";

const Navbar = () => {
   return (
     <nav className="navbar">
       <div className="container">
         <div className="logo">
            <h4>Recycling App</h4>
         </div>
         <SearchBar/>
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
           </ul>
         </div>
       </div>
     </nav>
   )
 }
 
 export default Navbar;