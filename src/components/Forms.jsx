
import { ButtonAcept } from "./Buttons"


export const FormReservation = () => {
  return (
    <form>
      <label>Nombre: </label>
      <input 
        type="text"
        placeholder="Agregue nombre aqui"   
        autoComplete="off"     
      />
      <label>Fecha:</label>
      <input
      type="date"
      placeholder="dia de reserva"
      autoComplete="off"
      />
      <label>Servicio:</label>
      <input
      type="checkbox"
      placeholder="Tipo de servicio"
      />
      <ButtonAcept/>
    </form>
  )
}
