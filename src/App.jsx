import React from "react"
import Componente from "./components/Componente"
import Propiedades from "./components/Propiedades"
import Estado from "./components/Estado"
import RenderizadoCondicional from "./components/RenderizadoCondicional"
import RenderizadoElemento from "./components/RenderizadoElemento"
import {EventosES6, EventosES7, MasEventos} from "./components/Eventos"
import Padre from "./components/ComunicacionComponentes"
import CicloVida from "./components/CicloDeVida"
import AjaxApis from "./components/AjaxApis"
import ContadorHooks from "./components/ContadorHooks"
import ScrollHooks from "./components/ScrollHooks"
import RelojHooks from "./components/RelojHooks"
import AjaxHooks from "./components/AjaxHooks"
import HooksPersonalizado from "./components/HooksPersonalizado"
import Referencias from "./components/Referencias"
import Formularios from "./components/Formularios"

const App =()=> {
  let nombre= "Napoleon"
  let auth= true
  let meses= ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembe', 'Diciembre']
  return(
 <>
 <h1>{nombre}</h1>
 <label htmlFor="nombre">Nombre</label>
 <input type="text" id="nombre" />
 <p>
   {auth ? 'El usuario esta logueado' : 'el usuario no esta logueado'}
 </p>

 <ul>
   {meses.map((el, index)=> <li key={index}>{el}</li>)}
 </ul>
 < Componente msg="mensaje desde una funcion expresada"/>
 <hr />
 <Propiedades 
     cadena="esto es un string" 
     numero={33} 
     booleano={false} 
     arreglo={[1, 2, 3, 4]}
     objeto={{nombre:"Adara", correo:'adara@mail.com', edad: 38}}
     elementoReact ={<i> Esto es un elemento</i>}
     funcion={num=>num*num}
     componenteReact= {<Componente msg='componente pasado como props'/>}
    
     />
     <hr />
     <Estado/>
     <hr />
     <RenderizadoCondicional/>
     <hr />
     <RenderizadoElemento/>
     <hr />
     <EventosES6/>
     <br /><br /><br />
     <EventosES7/>
     <br /><br /><br />
     <MasEventos/>
     <hr />
     <Padre/>
     <hr />
     <CicloVida/>
     <hr />
     <AjaxApis/>
     <hr />
     <ContadorHooks/>
     <hr />
     <ScrollHooks />
     <hr />
     <RelojHooks />
     <hr />
     <AjaxHooks />
     <hr />
     <HooksPersonalizado />
     <hr />
     <Referencias />
     <hr/>
     <Formularios/>
 </>


  )
}


export default App;