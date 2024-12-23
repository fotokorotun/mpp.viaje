import React, { useEffect } from "react";
import { useState } from "react";

const SmCar = 50;
const MedCar=75;
const BigCar = 100;

const CalcCar=()=> {

  const [car, setCar] = useState();
  const [dia, setDia] = useState();



  useState(()=>{
    calcularCoste();},
    [car, dia])
  const calcularCoste = () => {
    
    
    let cost =0;
    console.log(car, dia)

  if (car === 'SmCar') {
    cost= SmCar*dia;

  } else if (car === 'MedCar') {
    cost= MedCar*dia;

  } else if (car === 'BigCar') {
    cost= BigCar*dia;
}
console.log(cost)
  }

return (
  
  <>

    <select onChange={(e)=>setCar(e.target.value)}/>
<option value="">Seleccione una opcion,por favor</option>

  <option value="SmCar">SmCar</option>
  <option value="MedCar">MedCar</option>
  <option value="BigCar">BigCar</option>
 </select>

  <input type="number" onChange={(e)=>setDia(e.target.value)}/>
  

  
  <>
)

}


export default CalcCar;