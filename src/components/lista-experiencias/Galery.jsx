import { useEffect } from "react"
//import { getCarta } from "../../services/services"
//import { useState } from "react"
//import { Card } from "../Card";


export const Galery = () => {
  //const [lista, setLista]=useState([]);

  useEffect(()=>{
    const url="../../services/data/data.json";
    fetch(url)
    .then(response => response.json)
    .then(json =>console.log(json))
    // function rellenarLista(){
    //   try {      
    //     const data = getCarta()
    //     setLista(data)
    //     console.log(data)
    //   } catch (error) {
    //     console.log("error no existen elementos en lista de elementos", error)
    //   }
    // }
    //  rellenarLista()
  },[])

  return (
    <>
      <h3>Imagenes sobre Nuestras Clientas</h3>
      <div className="lista-cartas">
        
      </div>
    </>
  )
}
