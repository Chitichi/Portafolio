export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand col-md-8" href="/">
            <strong>
              <h3>Giuliana Vazquez</h3>
            </strong>
          </a>
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
                <a class="nav-link active " href="#sobremi">
                 <h5>Sobre mi</h5> 
                  <span class="visually-hidden">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#tecno">
                  <h5>Tecnologias</h5>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#proyectos">
                  <h5>Proyectos</h5>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contacto">
                  <h5>Contacto</h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
