import Navbar from "./navbar";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <div id="contacto">
        <h1 className="text-center text-white mt-3">Contacto</h1>
        <div className="text-center">
          <a
            href="https://www.linkedin.com/in/giulianavazquez/"
            className="card-link text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/linkedin.png"
              width="90px"
              height="90px"
              border="0px"
              className="mb-4"
            />
          </a>
          <a
            href="https://github.com/Chitichi"
            className="card-link text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.png"
              width="90px"
              height="90px"
              border="0px"
              className="mb-4"
            />
          </a>
          <a
            href="https://wa.me/qr/BYPBGLHLDUQFE1"
            className="card-link text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whats.png"
              width="90px"
              height="90px"
              border="0px"
              className="mb-4"
            />
          </a>
        </div>
      </div>
    </>
  );
}
