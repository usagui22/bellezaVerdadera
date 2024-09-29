import { Link } from "react-router-dom"
import "../style/Buttons.css"
import { useState } from "react"

export const ButtonReservation = () => {
  return (
    <button type="submit" className="button-reserva adentro">
      <Link to={"/form-reservation"}>
        Reserva tu cupo aqui!
      </Link>      
    </button>
  )
}
export const ButtonAcept = (nombre_reserva,fecha_reserva,servicio_reserva) =>{
  const [reserva,setReserva]=useState({
    nombre:"",
    fecha:"",
    servicio:""
  });
  function guardarReserva(){  
    setReserva({
      nombre:nombre_reserva,
      fecha:fecha_reserva,
      servicio:servicio_reserva
    })
    alert(`Su reserva es: ${reserva}`)
    console.log(reserva)
  }
  return(
    <button type="submit" onClick={guardarReserva} className="boton-aceptar">      
        Agendar      
    </button>
  )
}