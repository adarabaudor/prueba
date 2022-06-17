import React, {Component} from "react";

//componente basado en clases

/*class Componente extends Component{
  render(){
      return <h2>{this.props.msg}</h2>
  }
}*/

//componente basado en funcion declarada o expresada

/*function Componente(props){
  return <h2>{props.msg}</h2>
}*/

const Componente = (props) =><h2>{props.msg}</h2>


export default Componente;