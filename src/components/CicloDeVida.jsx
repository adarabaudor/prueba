import React, {Component} from "react";

class Reloj extends Component{
    constructor(props){
        super(props);
    }

     //fase de desmontaje

    componentWillUnmount(){
        //console.log(3, 'el componente ha sido eliminado del DOM')
    }

    render(){
     return <h3>{this.props.hora}</h3>
    }
}

export default class CicloVida extends Component{
    //fase de montaje
    constructor(props){
        super(props);

        //console.log(0, 'El componente se inicializa, aun no esta en el DOM')

        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false,
        }
        //las variables dentro del contructor llevan this
        this.temporizador = null;
    }

    componentDidMount(){
        //console.log(1, 'el componente de encuentra en el Dom')
    }

    //recibe 2 parametros uno con las props previas y otro con el estado previo
    componentDidUpdate(prevProps, prevState){
       // console.log(2, 'elestado o las props del componente han cambiado')
       // console.log(prevProps)
       // console.log(prevState)

    }

   
   


    tictac= ()=>{
        this.temporizador = setInterval(() => {
            //setState setea el estado,lo va actualizando
            this.setState({
                hora: new Date().toLocaleTimeString()
            });
        }, 1000);
    }


    iniciar= ()=>{
      this.tictac();
      this.setState({
          visible: true,
      })
    }

    detener= ()=>{
      clearInterval(this.temporizador);
      this.setState({
        visible: false,
    })
    }
     
    render(){
        //console.log(4, 'El componente renderiza o vuelve a renderizar x cambios')
        return(
            <>
            <h2>Ciclo de Vida</h2>
            {this.state.visible && <Reloj hora={this.state.hora}/>}
            <button onClick={this.iniciar}>Iniciar</button>
            <button onClick={this.detener}>Detener</button>
            </>
        )
    }
}