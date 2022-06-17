import React, {useState, useEffect} from "react";



function Pokemon({avatar, name}){

    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks() {

    const [pokemons, setPokemons]= useState([]);

   /* useEffect(()=>{
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

                        setPokemons((pokemons)=> [...pokemons, pokemon]);


                    }) 
              })
          })
    },[])*/

    useEffect(()=>{

      const getPokemons= async(url)=>{ 
           let res= await fetch(url),
           data= await res.json();

          //console.log(data)

          data.results.forEach(async(el)=>{
           let res = await fetch(el.url),
              poke= await res.json();
             
                 // console.log(poke)
                 
                  let pokemon = {
                      id: poke.id,
                      name:poke.name,
                      avatar: poke.sprites.front_default,
                  };

                  setPokemons((pokemons)=> [...pokemons, pokemon]);


                });  

         }  


      getPokemons("https://pokeapi.co/api/v2/pokemon/")
    

    },[])

    return(
        <>
        <h2>Apis con Hooks</h2>
        {pokemons.length=== 0 ? <h3>Cargando...</h3> :
         pokemons.map((el)=><Pokemon key={el.id} name={el.name} avatar={el.avatar}/>) }
        </>
    )
    
}