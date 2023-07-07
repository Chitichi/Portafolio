import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand col-md-8" href="/">
            <strong>
              <h3>Giuliana Vazquez</h3>
            </strong>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse " id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item ">
                <Link class="nav-link active " href="#sobremi">
                  <h5>Sobre mi</h5>
                  <span class="visually-hidden">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#tecno">
                  <h5>Tecnologias</h5>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#proyectos">
                  <h5>Proyectos</h5>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#contacto">
                  <h5>Contacto</h5>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
