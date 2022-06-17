import React from "react";
import {useFetch} from "../hooks/useFetch";

/*function Personaje({avatar, name}){

    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}*/

export default function HooksPersonalizado(){
  //console.log(useFetch())

  let url= " https://rickandmortyapi.com/api/character";

  let {data, isPending, error} = useFetch(url);


   /* const getPokemons= async()=>{ 
      //console.log(data)

        data.results.forEach(async(el)=>{
         let res = await fetch(el.url),
            poke= await res.json();
           
            console.log(poke)
               
                let pokemon = {
                    id: poke.id,
                    name:poke.name,
                    avatar: poke.image,
                };

               //setData((data)=> [...data, pokemon]);


              });  

       }  


    getPokemons()*/
  



    return(
        <>
        <h2>Hooks Personalizados</h2>
        <h2>{JSON.stringify(isPending)}</h2>
        <h2>  <mark> {JSON.stringify(error)}</mark></h2>
        <h2>
           {/* <pre style={{whiteSpace:'pre-wrap'}}>
            <code> {JSON.stringify(data)}</code>
    </pre>*/}
        </h2>
     
        {/*{pokemons.length=== 0 ? <h3>Cargando...</h3> :
         pokemons.map((el)=><Pokemon key={el.id} name={el.name} avatar={el.avatar}/>) }*/}

        </>
    )
}