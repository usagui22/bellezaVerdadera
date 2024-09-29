import PropTypes from "prop-types";
import "../style/Card.css";

export const Card = (imagen, nombre, descrip) => {
  
  return (
    <div className="carta-contenedor">       
    <img src={imagen} alt={nombre}/>    
    <div className="carta-informacion">
      <h3>{nombre}</h3>
      <h3>{descrip}</h3>
    </div>    
    </div>
  )
}

Card.PropTypes = {
  imagen: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  descrip: PropTypes.string.isRequired
}