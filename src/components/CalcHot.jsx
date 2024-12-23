import React, { useEffect } from "react";

import { useState } from "react";

const Preu3estr=100;
const Preu4estr=150;
const Preu5estr=200;

const CalcHot = () => {
  
const [estrella, setEstrella] = useState();
const [noches, setNoches] = useState();
  

useEffect( () => {
calcularCoste();
},
[estrella, noches])
const calcularCoste = () => {

         let cost = 0;

            console.log(estrella, noches)
         
            if (estrella === '3') {
                cost = Preu3estr*noches;
            } else if (estrella === '4') {
                cost = Preu4estr*noches;
            } else if (estrella === '5') {
                cost = Preu5estr*noches;
            }
            console.log(cost)
}
   

         return (
         <div>

 <select onChange={(e)=>setEstrella(e.target.value)}>
    <option value="">Seleccione una opcion, por favor</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
 </select>
 
<input type="number" onChange={(e)=>setNoches(e.target.value)}/>

<button onClick={calcularCoste}>Enviar</button>

 
<p>Total: {cost}</p></div> 
 
)
          
        }




export default CalcHot;