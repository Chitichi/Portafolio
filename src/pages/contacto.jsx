import Navbar from "./navbar";
import Link from "next/link";

export default function Contacto() {
    return (
      <>
      <div id="contacto">
              <h1 className= "text-center text-white mt-3">Contacto</h1>
              <div class="text-center">
              <a href="https://www.linkedin.com/in/giulianavazquez/" class="card-link text-white">
              <img
              src="/linkedin.png"
              width="60px"
              height="60px"
              border="0px"
              class="mb-4"
            ></img>
             </a>
             <a href="https://github.com/Chitichi" class="card-link text-white">
              <img
              src="/github.png"
              width="90px"
              height="90px"
              border="0px"
              class="mb-4"
            ></img>
             </a>
             <a href="https://wa.me/qr/BYPBGLHLDUQFE1" class="card-link text-white">
              <img
              src="/whats.png"
              width="60px"
              height="60px"
              border="0px"
              class="mb-4"
              
              ></img>
              
             </a>
             </div>
             </div>
   </>
    )};