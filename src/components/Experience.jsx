
const persona=[];//get personas que recomienden
export const Experience = () => {
  return (
    <table>
      <h3>Experiencias de Nuestros Clientes</h3>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
          persona.map((p)=>{
            return(
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.record}</td>
                <td>{p.img}</td>
              </tr>              
            )
          })
        }
      </tbody>
    </table>
  )
}
