
import { useEffect, useState } from "react";


const Madrid=100;
const Barcelona=50;
const Milan=50;
const Bucarest=100;
const Atenas = 150;


const CalcVuelo=()=>{

const [origen, setOrigen] = useState();
const [destino, setDestino] = useState();


useEffect(()=>
  {

  calcularCoste();
}, [origen, destino])

const calcularCoste = () => {

  let cost =0;

console.log(origen, destino)


if (origen === 'Madrid'&&destino === "Milan") {
  cost= Madrid+Milan;
}
 /* if (origen === 'Madrid'&&destino === "Bucarest") {
  cost= Madrid+Bucarest;
}
 if (origen === 'Madrid'&&destino === "Atenas") {
  cost= Madrid+Atenas;
}

if (origen === 'Barcelona'&&destino === "Milan") {
  cost= Barcelona+Milan;
}
 if (origen === 'Barcelona'&&destino === "Bucarest") {
  cost= Barcelona+Bucarest;
}
 if (origen === 'Barcelona'&& destino === "Atenas") {
  cost= Barcelona+Atenas;
} */
}

return (

<div>
<select onChange={(e)=>setOrigen(e.target.value)}>
  <option value="">Selecciona una opcion, por favor</option>
  <option value="Madrid">Madrid</option>
  <option value="Barcelona">Barcelona</option>
</select>

<input type="text" onChange={(e)=>setOrigen(e.target.value)} />



<select onChange={(e)=>setDestino(e.target.value)} >
  <option value="">Selecciona una opcion por favor</option>
  <option value="Milan">Milan</option>
  <option value="Bucarest">Bucarest</option>
  <option value="Atenas">Atenas</option>
</select>

<input type="text" onChange={(e)=>setOrigen(e.target.value)} />
  
</div>
)

}

export default CalcVuelo