import { Link } from "react-router-dom"


export const ButtonReservation = () => {
  return (
    <button type="submit">
      <Link to={"/form-reservation"}>
        Reserva tu cupo aqui!
      </Link>      
    </button>
  )
}
export const ButtonAcept = () =>{
  return(
    <button type="submit">
      <Link to={"/guardar-reserva"}>
        Agendar
      </Link>
    </button>
  )
}