import api from "./api"

export const getCarta = async() =>{
    try{
        const res = await api.get("experiencias")
        console.log(res)
    }catch (error){
        console.log("error al cargar los datos", error)
        throw new Error(error); 
    }
}

