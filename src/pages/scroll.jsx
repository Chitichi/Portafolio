import React from 'react';
import Tecnologias from './tecnologias';
import styles from "./api/estilos.module.css"
import Proyectos from './proyectos';
import Contacto from './contacto';
import AnimatedTitle  from './tituloanimado';
import SobreMi from './sobremi';
import Linea from './linea';


export default function ScrollComponent() {
    return (
     
      <div className={styles.scroll}>
       {/* <div class= "container">
        <div class = "row">
          <div class = "text-center text-white mt-3">
      <AnimatedTitle text= "Hola! mi nombre es Giuliana Vazquez"/>
      </div>
      </div>
      </div> */}
        <SobreMi/> <br></br>
        <Linea/>
        <Tecnologias/><br></br>
        <Linea/>
        <Proyectos/><br></br>
        <Linea/>
        <Contacto/><br></br>
      </div>
      
    );
  }

  