import React, {Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state={
            contador:0,
        };
       
        //para que funcione hay que enlazar en el constructor el this para que no salga error
        this.sumar= this.sumar.bind(this)
        this.restar= this.restar.bind(this) 

    }
    
    sumar(e){
        //console.log("sumando")
        //console.log(this)
        this.setState({
            contador: this.state.contador + 1,
        });

    }

    restar(e){
        //console.log("restando")
        this.setState({
            contador: this.state.contador - 1,
        });

    }

    render(){
        return(
            <div>
               <h2>Eventos - ES6</h2>

               <nav>
                  <button onClick={this.sumar}>+</button>
                  <button onClick={this.restar}>-</button>
               </nav>

               <h3>{this.state.contador}</h3>  
            </div>
        )
    }
}

//properties initializer -- ya no es necesario el constructor
export class EventosES7 extends Component{
        state={
            contador:0,
        };
       
       //Arrow function para el bind, no necesitas poner const ya que esta dentro de una clase y se toma com metodo. 
       //y herendan el this del contexto donde se encuentran... por eso se saca el bind

    sumar=(e)=>{
        //console.log("sumando")
        //console.log(this)
        this.setState({
            contador: this.state.contador + 1,
        });

    }

    restar=(e)=>{
        //console.log("restando")
        this.setState({
            contador: this.state.contador - 1,
        });

    }

    render(){
        return(
            <div>
               <h2>Eventos ES7</h2>

               <nav>
                  <button onClick={this.sumar}>+</button>
                  <button onClick={this.restar}>-</button>
               </nav>

               <h3>{this.state.contador}</h3>  
            </div>
        )
    }
}


// se crea la props y se  pasa el evento que cree
/*function Boton(props){
  return(
      <button onClick={props.myOnClick}>Boton hecho componente</button>
  )
}
const Boton=(props)=> <button onClick={props.myOnClick}>Boton hecho componente</button>
o destructuramos*/

const Boton=({myOnClick})=> <button onClick={myOnClick}>Boton hecho componente</button>



export class MasEventos extends Component{
     
    handleClick =(e, mensaje)=>{
        console.log(e);
        console.log(e.nativeEvent)
        console.log(e.target)
        console.log(e.nativeEvent.target)
        console.log(mensaje)


    }

    render(){
      return(
          <div>
              <h2>Mas sobre eventos</h2> 
              <button onClick={(e)=>this.handleClick(e,'paso de parametro desde el evento')}>Saludar</button>

              {/* evento personalizado ... se crea una props, ya que los eventos son pera las etiquetas jsx, no para la etiuta de componente
              <Boton onClick={(e)=>this.handleClick(e,'paso de parametro desde el evento')}/>*/}

              <Boton myOnClick={(e)=>this.handleClick(e,'paso de parametro desde el evento')}/>

          </div>
      )

    }
    
}