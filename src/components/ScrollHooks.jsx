import React, {useState, useEffect} from "react";

export default function ScrollHooks() {

    const [ScrollY, setScrollY] = useState(0);
  

    useEffect(()=>{
        //console.log('Moviendo el Scroll');

        const DetectarScroll= ()=>{
            setScrollY(window.pageYOffset)
        }


        
        window.addEventListener('scroll', DetectarScroll)

        //ejemplo de desmontaje
       return ()=>{
        window.removeEventListener('scroll', DetectarScroll);
        //console.log('FASE DE DESMONTAJE');
       }

    }, [ScrollY]);

    //para que sea fase de montaje necesito dejar [] vacios
    useEffect(()=>{
        //console.log('FASE DE MONTAJE');

    }, []);

    useEffect(()=>{
       // console.log('FASE DE Actualizacion');

    })

    //para que funcone le fase de desmontaje se retorna una funcion
    useEffect(()=>{
        return ()=>{
            //console.log('Fase de desmontaje');

        }

    })

    return(
        <>
        <h3>Hooks - useEffect </h3>
        <p>Scroll Y del navegador {ScrollY} px</p>
        </>
    )  
}