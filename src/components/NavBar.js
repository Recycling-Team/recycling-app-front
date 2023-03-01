import { NavLink } from "react-router-dom";
import '../NavBar.css'

const Navbar = () => {
   return (
     <nav className="navbar">
       <div className="container">
         <div className="logo">
            <h4>Logo</h4>
         </div>
         <div className="nav-elements">
           <ul>
             <li>
               <NavLink to="/">Home</NavLink>
             </li>
             <li>
               <NavLink to="/create">Create</NavLink>
             </li>
             <li>
               <NavLink to="/itemlist">List</NavLink>
             </li>
           </ul>
         </div>
       </div>
     </nav>
   )
 }
 
 export default Navbar