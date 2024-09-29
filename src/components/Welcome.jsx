import bienvenida from "../assets/saludo.jpg"
import "../style/Welcome.css"

export const Welcome = () => {
  return (
    <div className="contenedor-saludo">
      <h1 className="titulo-welcome">Bienvenido Visitante!!!</h1>      
      <br/>      
      <br/>
      <div className="imagen-saludo"> 
        <img src={bienvenida} alt="saludo" />
      </div>      
    </div>
  )
}
