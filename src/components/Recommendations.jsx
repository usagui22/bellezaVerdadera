
const persona=[];//get personas que recomienden
export const Recommendations = () => {
  return (
    <table>
      <thead>
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
      </thead>
    </table>
  )
}
