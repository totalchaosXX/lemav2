//import { MOCK_DATA } from "../data/MOCK_DATA"
import { mock_users } from "../data/mock_users"
import { useEffect, useState } from "react"




export const pedirDatos = () => {
    return new Promise((resolve, reject)=>{
        
        setTimeout(()=> {
            resolve(mock_users)
        },1000)
    })
}

