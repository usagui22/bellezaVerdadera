import { Link } from "react-router-dom"
import "../style/Buttons.css"

export const ButtonReservation = () => {
  return (
    <button type="submit" className="button-reserva adentro">
      <Link to={"/form-reservation"}>
        Reserva tu cupo aqui!
      </Link>      
    </button>
  )
}
export const ButtonAcept = () =>{
  return(
    <button type="submit" className="boton-aceptar">
      <Link to={"/guardar-reserva"}>
        Agendar
      </Link>
    </button>
  )
}