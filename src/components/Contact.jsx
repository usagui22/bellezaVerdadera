import logo from "../assets/Logo.jpg"
import "../style/Contact.css"

export const Contact = () => {
  return (
    <div className="contenedor-contact">
    <img src={logo} alt="logo"/>
    <div className="contenido-contact">
      <span>Cel.: 77429974</span>
      <br/>
      <span>Calle Esteban Arce esq. Punata, Mercado San Antonio </span>
      <br/>
      <span>caseta 8, Cochabamba, Bolivia</span>
    </div>    
    </div>
  )
}


