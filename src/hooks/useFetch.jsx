import {useState, useEffect } from "react";


//fx() para tomar peticiones y validar data

export const useFetch =(url)=>{
  //se realizan 3 variables para fx() que actualicen
  //1: donde se toma la data
   const [data, setData] = useState(null);
   //2: controla si se ha recibido la peticion (pendiente)
   const [isPending, setIsPending] = useState(true);
   // en caso de error
   const [error, setError] = useState(null);

   useEffect(()=>{
    
    const getData= async(url)=>{ 
        try {
            let res= await fetch(url);

            if (!res.ok) {
               throw { err: true,
                       status: res.status, 
                       statusText: !res.statusText ? 'Ocurrio un error' : res.statusText
                      }; 
            }

           let data= await res.json();

           //actualizacion de variables de estado
           setIsPending(false);
           setData(data);
           setError({err: false});



        } catch (err) {

            setIsPending(true);
            setError(err);
            
        }   

    }


   getData(url)
   },[url])

   return {data, isPending, error}
}