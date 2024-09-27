import caraError from "../assets/CaraError.jpg"
import "../style/ErrorPage.css"

export const ErrorPage = () => {
  return (
    <div className="contenido-error">
      <h1>404 Pagina no Encontrada</h1>  
      <p>Revice la informacion a la cual desea acceder, puede ser</p>
      <p>problema de direccion o de seridor, intente navegar por </p>
      <p>enlaces publicos o que tenga acceso a la pagina.</p>

      <img src={caraError} alt="cara-error" />
    </div>
  )
}
