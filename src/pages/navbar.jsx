import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand col-md-8" href="/">
            <strong>
              <h3>Giuliana Vazquez</h3>
            </strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse collapse " id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item ">
                <Link className="nav-link active " href="#sobremi">
                 <h5>Sobre mi</h5> 
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#tecno">
                  <h5>Tecnologias</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#proyectos">
                  <h5>Proyectos</h5>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#contacto">
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
