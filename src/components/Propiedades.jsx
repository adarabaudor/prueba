import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props){
    return(
       <div>
          <h2>{props.porDefecto}</h2>
          <ul>
              <li>{props.cadena}</li>
              <li>{props.numero}</li>
              <li>{props.booleano ? "Verdadero" : "Falso"}</li>
              <li>{props.arreglo.join(', ')}</li>
              <li>{props.elementoReact}</li>
              <li>{`${props.objeto.nombre}-- ${props.objeto.correo}-- ${props.objeto.edad} `}</li>
              <li>{props.arreglo.map(props.funcion).join(", ")}</li>
              <li>{props.componenteReact}</li>
          </ul> 
       </div> 
    )
}

// se pueden cargar por defecto internamente
Propiedades.defaultProps = {
    porDefecto: 'Las Props',
}

//permite definir caracteristicas que soporten las propiedades

Propiedades.propTypes ={
numero: PropTypes.number,
}