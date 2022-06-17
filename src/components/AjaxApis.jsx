import React, {Component} from "react";


function Pokemon(props) {

    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
    
}

export default class AjaxApis extends Component{
    state= {
        pokemons:[],
    }

    componentDidMount(){
        let url= "https://pokeapi.co/api/v2/pokemon/"

        fetch(url)
          .then(res=> res.json())
          .then(data =>{
              //console.log(data)
              data.results.forEach((el)=>{
                  fetch(el.url)
                    .then(res=> res.json())
                    .then(poke =>{
                        //console.log(poke)
                        let pokemon = {
                            id: poke.id,
                            name:poke.name,
                            avatar: poke.sprites.front_default,
                        };

                        let pokemons = [...this.state.pokemons, pokemon];

                        this.setState({pokemons})
                        //esta linea de abajo muestra los 20 pokemon pero sale un warning
                       // this.state.pokemons.push(pokemon);


                    }) 
              })
          })
    }  

    render(){
        return(
            <>
            <h2>Apis</h2>
            {this.state.pokemons.length=== 0 ? <h3>Cargando</h3> :
             this.state.pokemons.map((el)=><Pokemon key={el.id} name={el.name} avatar={el.avatar}/>) }
            </>
        )
    }
}
