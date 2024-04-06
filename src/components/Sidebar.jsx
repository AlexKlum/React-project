import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {

    const [categories, setCategories] = useState([]);

     return <> 
     <div className="sidebar">
     <ul>
      <NavLink to={'/category/mat'}>
         <button className="kategorier" role="button">Mat (3)</button>
      </NavLink>
     <NavLink to={'/category/bakelser'}><button className="kategorier" role="button">Bakelser(3)</button></NavLink>
     <NavLink to={'/category/drink'}><button className="kategorier" role="button">Drinkar (3)</button></NavLink>
     </ul>
   </div>
   </>
}
export default Sidebar;