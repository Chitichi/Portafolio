import React from "react";
import Tecnologias from "./tecnologias";
import styles from "./api/estilos.module.css";
import Proyectos from "./proyectos";
import Contacto from "./contacto";
import SobreMi from "./sobremi";
import Linea from "./linea";
import Navbar from "./navbar";

export default function ScrollComponent() {
  return (
    <div className={styles.scroll}>
      <Navbar/><br></br><br></br>
      <SobreMi /> <br></br>
      <Linea />
      <Tecnologias />
      <br></br>
      <Linea />
      <Proyectos />
      <br></br>
      <Linea />
      <Contacto />
      <br></br>
    </div>
  );
}
