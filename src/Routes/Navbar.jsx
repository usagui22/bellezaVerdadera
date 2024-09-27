import { NavLink } from "react-router-dom"
import { Title } from "../components/Title"
import "../style/Navbar.css"
import { useState } from "react";

const Navbar = () => {  
  const {menuOpen, setmenuOpen} = useState(false);
  return (
    <nav className="nav-contenedor">
      <NavLink to={"/"}>
        <Title />
      </NavLink>
      <div className="menu" onClick={()=>{setmenuOpen(!menuOpen);}}>
        <span></span>
        <span></span>
        <span></span>        
      </div>
      <ul className={menuOpen? "open": ""}>
        <li><NavLink to={"/about"}>Acerca de</NavLink></li>
        <li><NavLink to={"/galery"}>Galeria</NavLink></li>        
        <li><NavLink to={"/contact"}>Contactanos</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar
