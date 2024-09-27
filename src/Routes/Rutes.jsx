import { Route, Routes } from "react-router-dom"
import { Galery } from "../components/lista-experiencias/Galery"
import { Contact } from "../components/Contact"
import { ErrorPage } from "./ErrorPage"
import { About } from "../components/About"
import { Welcome } from "../components/Welcome"


export const Rutes = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage/>}/>      
      <Route path="/" element={<Welcome/>}/>
      <Route path="/galery" element={<Galery />} />      
      <Route path="/contact" element={<Contact />}/>
      <Route path="/error" element={<ErrorPage/>}/>
      <Route path="/about" element={<About />}/>
    </Routes>
  )
}


