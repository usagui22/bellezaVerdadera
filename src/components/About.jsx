import { ButtonReservation } from "./Buttons"
import logo from "../assets/Logo.jpg"
import "../style/About.css"

export const About = () => {
  return (
    <div className="contenido-about">
      <img src={logo} alt="logo" className="imagen-about"/>
      <p>Salon de belleza dedicado satisfacer las necesidades </p>
      <p>necesidades esteticas y de moda - temporada con la</p>
      <p>calidad que brinde confianza y una atención personalizada.</p>
      <ButtonReservation/>
    </div>
  )
}
