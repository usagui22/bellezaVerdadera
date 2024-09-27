import logoBV from "../assets/Logo.jpg"
import "../style/Title.css"

export const Title = () => {
  return (
    <div className="title-contenedor">
      <h1 className="title-name">Belleza Verdadera</h1>
      
      <img src={logoBV} alt="logoBV" className="imagen-title"/>
    </div>    
  )
}
