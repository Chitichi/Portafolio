import Link from "next/link";

export default function Proyectos() {
  const linkYouTube = "https://www.youtube.com/watch?v=6JF0WrhJlw0&t=18s";
  return (
    <>
      <div id="proyectos">
        <div className="row">
          <h1 className="text-center m-12 text-white mt-3">Mis proyectos</h1>
          <div className="container d-flex justify-content-center mx-4">
          <div className="card text-center text-white bg-primary border-light mb-3 col-lg-3 col-md-6 col-sm-12 m-3 d-flex justify-content-center align-items-center mx-0">
              <h2 className="text-center m-3">Organizador Mensual</h2>
              <img src="portadaOrganizador.png" width="300px" height="400px" border="2px" style={{ display: 'block' }} />

              <div className="card-body container d-flex justify-content-center ">
                <p className="card-body lead text-center  mb-4 col-lg-4 col-md-6 col-sm-12 m-3">
                  Actualmente me encuentro desarrollando una aplicación destinada a la organización económica mensual.
                  Esta app te permite llevar un registro claro y consistente de los gastos que realizas en el mes, agrupa dichos gastos en distintas categorías existentes, o bien si lo necesitas podrías crear una, y luego te muestra un detalle mensual de cada gasto que haz realizado. Tienes la posibilidad de agregar medios de pago, asi como tambien calcular en el momento los descuentos o recargos que tengan los productos que vas a adquirir. La idea principal de esta herramienta surgió debido a los cambios repentinos de precios en mi país, creando en mi la necesidad de poder hacer las cuentas de las compras antes de llegar a la caja registradora.
                   De esta manera llevo un calculo presiso sin necesidad de multiples listas y calculadoras.
                   Ademas, implemente un chatbot que ayuda al usuario con los conceptos básicos de la aplicación, facilitando su uso.
                   Aún me encuentro trabajando en ella! 
                </p>
              </div>
              <div className="card-body lead">
              <h4 className="card-body lead text-white ">
                  <strong> Demo: </strong>
                </h4>
                <Link
                  href="https://organizador-mensual.vercel.app/"
                  className="card-link text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://organizador-mensual.vercel.app/
                </Link>
                <br />
                <h4 className="card-body lead text-white ">
                  <strong>Código front-end: </strong>
                </h4>
                <Link
                  href="https://github.com/Chitichi/organizador-mensual"
                  className="card-link text-white"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Chitichi/organizador-mensual
                </Link>
                <br />
               
              </div>
            </div>
            <div className="card text-center text-white bg-primary border-light mb-3 col-lg-3 col-md-6 col-sm-12 m-3 d-flex justify-content-center align-items-center">
              <h2 className="text-center m-3">Henry Dogs</h2>
              <img src="pidogs.jpeg" width="300px" height="400px" border="2px" style={{ display: 'block' }} />

              <div className="card-body container d-flex justify-content-center ">
                <p className="card-body lead text-center  mb-4 col-lg-4 col-md-6 col-sm-12 m-3">
                  Como parte de mi aprendizaje en programación, realicé un
                  proyecto individual llamado Henry Dogs. El mismo se trata de
                  una aplicación en la que podemos encontrar distintos perros
                  con sus características principales. Realicé la totalidad de
                  la aplicación consumiendo datos desde una API externa. Para
                  ello utilicé tecnologías como Node.js, PostgreSQL, Sequelize y
                  Express para el Back-End, y React, Redux, HTML y CSS para el
                  Front-End.
                </p>
              </div>
              <div className="card-body lead">
                <h4 className="card-body lead text-white ">
                  <strong>Código front-end: </strong>
                </h4>
                <Link
                  href="https://github.com/Chitichi/PIDogs/tree/main/client"
                  className="card-link text-white text-break"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Chitichi/PIDogs/tree/main/client
                </Link>
                <br />
                <h4 className="card-body lead text-white ">
                  <strong>Código back-end: </strong>
                </h4>
                <Link
                  href="https://github.com/Chitichi/PIDogs/tree/main/api"
                  className="card-link text-white text-break"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Chitichi/PIDogs/tree/main/api
                </Link>
                <br />
              </div>
            </div>
            <div className="card text-center text-white bg-primary border-light mb-3 col-lg-3 col-md-6 col-sm-12 m-3 d-flex justify-content-center align-items-center mx-0">
              <h2 className="text-center m-3">Novelty Books</h2>
              <img
                src="https://res.cloudinary.com/dzpp8s5po/image/upload/v1677870892/Images/Novelty_Books_qjrueb.jpg"
                width="300px"
                height="400px"
                border="2px"
                style={{ display: 'block' }}
              />

              <div className="card-body container d-flex justify-content-center ">
                <p className="card-body lead text-center  mb-4 col-lg-4 col-md-6 col-sm-12 m-3">
                  Para concluir mis estudios como programador full stack, realicé junto con un grupo de compañeros un
                  proyecto llamado Novelty Books. El objetivo de nuestro
                  e-commerce fue que cualquier persona con acceso a una red de
                  internet pudiera comprar el libro físico deseado. En este
                  proyecto usamos tecnologías como JavaScript, MongoDB,
                  Mongoose, Node, Express, Cloudinary, NodeMailer, React, Next,
                  Next Auth, Stripe, Bootstrap, CSS y HTML5.
                </p>
              </div>
              <div className="card-body lead ">
                <h4 className="card-body lead text-white ">
                  <strong> Demo: </strong>
                </h4>
                <Link
                  href="https://novelty-books.vercel.app/"
                  className="card-link text-white text-break"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://novelty-books.vercel.app/
                </Link>
                <br />
                <h4 className="card-body lead text-white ">
                  <strong>Código front-end: </strong>
                </h4>
                <Link
                  href="https://github.com/Chitichi/PFFront"
                  className="card-link text-white text-break"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Chitichi/PFFront
                </Link>
                <br />
                <h4 className="card-body lead text-white text-break ">
                  <strong>Código back-end: </strong>
                </h4>
                <Link
                  href="https://github.com/Arthaz1245/ProyectoFinalGrupo14Backend"
                  className="card-link text-white text-break"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/Arthaz1245/ProyectoFinalGrupo14Backend
                </Link>
                <br />
                <h4 className="card-body lead text-white ">
                  <strong>YouTube: </strong>
                </h4>
                <Link
                  href={linkYouTube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  https://www.youtube.com/watch?v=6JF0WrhJlw0&t=18s
                </Link>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </>
  );
}
