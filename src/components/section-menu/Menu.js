import React, {useState, useEffect} from 'react'
import Cookies from 'universal-cookie'
import ContainerMenu from './ContainerMenu';
import axios from 'axios'

const cookies = new Cookies();


export default function Menu() {


    const [imc , setImc] = useState({
        peso: "",
        altura: "" 
    })
    

console.log(cookies.get("id"));
console.log(cookies.get("name"));




useEffect(() =>{
    if(!cookies.get("email")){
      window.location.href='./'
    }

    // const num = 0;
    // console.log(typeof(num));
    // console.log(num)

    const indice = cookies.get("id");
    // const indiceT = parseInt(indice);

       axios.get(`https://api-users-54hhbmzp6.vercel.app/users/${indice}`)
        .then(res => {
          const datos = res.data;
          console.log(datos);
          setImc({
    
                  peso : parseFloat(datos.peso),
                  altura : parseFloat(datos.altura)
                }
          )
        })
    
    },[]);



    const imcT = imc.peso / Math.pow(imc.altura,2)


        console.log(imcT)
    

   


    return (

        <div>
            <ContainerMenu />  
            

         
        </div>
    )
}
