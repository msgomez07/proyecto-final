import React from 'react'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default function Menu() {

console.log(cookies.get("id"));
console.log(cookies.get("name"));
    return (

        <div>
            Menu principal
        </div>
    )
}
