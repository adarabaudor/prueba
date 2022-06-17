import React, {createRef, useRef} from "react";

export default function Referencias(){
    //con componentes de clases se usa createRef ej: let refMenu= createRef(),

    let refMenu= useRef(),
        refMenuBtn= useRef();

        //console.log(refMenu, refMenuBtn)

    const handlerMenu= (e)=>{
     /* const $menu= document.getElementById('menu');

      if(e.target.textContent==="Menu"){
        e.target.textContent = 'Cerrar';
        $menu.style.display= 'block';
      }else{
        e.target.textContent = 'Menu';
        $menu.style.display= 'none';
      }*/

      if(refMenuBtn.current.textContent==="Menu"){
        refMenuBtn.current.textContent = 'Cerrar';
        refMenu.current.style.display= 'block';
      }else{
        refMenuBtn.current.textContent = 'Menu';
        refMenu.current.style.display= 'none';
      }
    }

    return(
        <>
        <h2>Referencias</h2>
        <button id="menu-btn" ref={refMenuBtn} onClick={handlerMenu}>Menu</button>
        <nav id="menu" ref={refMenu} style={{display:'none'}}>
            <a href="#">seccion 1</a>
            <br />
            <a href="#">seccion 2</a>
            <br />
            <a href="#">seccion 3</a>
            <br />
            <a href="#">seccion 4</a>
            <br />
            <a href="#">seccion 5</a>
        </nav>
        </>
    )
}