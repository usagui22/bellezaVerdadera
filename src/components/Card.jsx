import "../style/Card.css";

export const Card = (imagen, nombre, descrip) => {
  
  return (
    <div className="carta-contenedor">       
    <img src={imagen} alt={nombre}/>    
    <div className="carta-informacion">
      <h3>{nombre}</h3>
      <h4>{descrip}</h4>
    </div>    
    </div>
  )
}
