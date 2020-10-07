import React, {useEffect} from 'react'
import Cookies from 'universal-cookie'
import ContainerMenu from './ContainerMenu';
import axios from 'axios'

const cookies = new Cookies();


export default function Menu() {

console.log(cookies.get("id"));
console.log(cookies.get("name"));

useEffect(() =>{
    if(!cookies.get("email")){
      window.location.href='./'
    }

    const indice = cookies.get("id");
    const indiceT = parseInt(indice) - 1;



    // const num = 0;
    // console.log(typeof(num));
    // console.log(num)
        
    axios.get(cookies.get("url"))
    .then(res => {
      const datos = res.data;
      console.log(datos[indiceT]);
      
    });

    

    }) 


    return (

        <div>
            <ContainerMenu />           
        </div>
    )
}
