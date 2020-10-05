import React, {useEffect} from 'react'
import Cookies from 'universal-cookie'
import ContainerMenu from './ContainerMenu';

const cookies = new Cookies();

export default function Menu() {

console.log(cookies.get("id"));
console.log(cookies.get("name"));




useEffect(() =>{
    if(!cookies.get("email")){
      window.location.href='./'
    }
    
    }) 

    return (

        <div>
            <ContainerMenu />            
        </div>
    )
}
