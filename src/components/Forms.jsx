
import { ButtonAcept } from "./Buttons"
import "../style/Forms.css"

export const FormReservation = () => {
  return (
    <form>
      <div className="input_container">
      <label>Nombre: </label>
      <input 
        type="text"
        placeholder="Agregue nombre aqui"   
        autoComplete="off"     
      />
      </div>
      <br/>
      <div className="input_container">
      <label>Fecha:</label>
      <input
      type="date"
      placeholder="dia de reserva"
      autoComplete="off"
      />
      </div>
      <br/>
      <div className="input_container">
      <label>Servicio:</label>
      <select
      type="select"
      placeholder="Tipo de servicio"
      >
        <option value={"pintado_uñas"}>Pintado de Uñas</option>
        <option value={"peinados"}>Peinados</option>
        <option value={"maquillaje"}>Maquillaje</option>
      </select>
      </div>      
      <br/>
      <ButtonAcept/>
    </form>
  )
}
