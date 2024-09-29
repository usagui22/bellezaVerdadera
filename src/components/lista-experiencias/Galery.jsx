import "../../style/Galery.css"
import data from "../../services/data/data.json"

export const Galery = () => {  
  console.log(data.experiencies)
  return (
    <>
      <h3>Imagenes sobre Nuestras Clientas</h3>
      <div className="lista-cartas">
        {
          data.experiencies.map(function(carta){
            return(
              <div className="carta-contenedor" key={carta.id}>
                <img src={`../../assets/${carta.ruta_imagen}`} className="imagen_carta" alt={carta.nombre_imagen}/>
              <div className="carta-informacion">
                <h3>{carta.nombre_imagen}</h3>
                <h3>{carta.descripcion}</h3>
              </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
