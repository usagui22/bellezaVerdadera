
import { Title } from "../components/Title"

const Navbar = () => {  
  
  return (
    <>
      <Title/>
      <ul className="contenido_nav">
        <li>Acerca de</li>
        <li>Galeria</li>
        <li>Recomendaciones</li>
        <li>Contactanos</li>
      </ul>
    </>
  )
}

export default Navbar
