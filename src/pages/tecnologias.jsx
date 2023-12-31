import Navbar from "./navbar";
import styles from "./api/estilos.module.css";

export default function Tecnologias() {
  return (
    <>
      <div id="tecno">
        <h1 className="text-center text-white mt-3">Tecnologias</h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="card text-center text-white bg-secondary border-light mb-2 col-6 col-md-3 m-3">
              <h3 className="text-center mt-3">React</h3>
              <div className="text-center">
                <img
                  src="/react.svg"
                  width="80px"
                  height="80px"
                  border="0px"
                  className="mb-2"
                  alt="React"
                />
              </div>
            </div>

            <div className="card text-center text-white bg-secondary border-light mb-2 col-6 col-md-3 m-3">
              <h3 className="text-center mt-3">Redux</h3>
              <div className="text-center">
                <img
                  src="/redux.com.svg"
                  width="80px"
                  height="80px"
                  border="0px"
                  className="mb-4"
                  alt="Redux"
                />
              </div>
            </div>

            <div className="card text-center text-white bg-secondary border-light mb-2 col-6 col-md-3 m-3">
              <h3 className="text-center mt-3">JavaScript</h3>
              <div className="text-center">
                <img
                  src="/javascript-seeklogo.com.svg"
                  width="80px"
                  height="80px"
                  border="0px"
                  className="mb-4"
                  alt="JavaScript"
                />
              </div>
            </div>

            <div className="card text-center text-white bg-secondary border-light mb-2 col-6 col-md-3 m-3">
              <h3 className="text-center mt-3">HTML</h3>
              <div className="text-center">
                <img
                  src="/html.svg"
                  width="80px"
                  height="80px"
                  border="0px"
                  className="mb-4"
                  alt="HTML"
                />
              </div>
            </div>

            <div className="card text-center text-white bg-secondary border-light mb-2 col-6 col-md-3 m-3">
              <h3 className="text-center mt-3">CSS</h3>
              <div className="text-center">
                <img
                  src="/css.svg"
                  width="80px"
                  height="80px"
                  border="0px"
                  className="mb-4"
                  alt="CSS"
                />
              </div>
            </div>

            <div className="card text-center text-white bg-secondary border-light mb-2 col-6 col-md-3 m-3">
              <h3 className="text-center mt-3">Next.js</h3>
              <div className="text-center">
                <img
                  src="/next.js.svg"
                  width="80px"
                  height="80px"
                  border="0px"
                  className="mb-4"
                  alt="Next.js"
                />
              </div>
            </div>

            <div className="card text-center text-white bg-secondary border-light mb-2 col-6 col-md-3 m-3">
              <h3 className="text-center mt-3">Sequelize</h3>
              <div className="text-center">
                <img
                  src="/sequelize.svg"
                  width="80px"
                  height="80px"
                  border="0px"
                  className="mb-4"
                  alt="Sequelize"
                />
              </div>
            </div>

            <div className="card text-center text-white bg-secondary border-light mb-2 col-6 col-md-3 m-3">
              <h3 className="text-center mt-3">PostgreSQL</h3>
              <div className="text-center">
                <img
                  src="/postgresql.svg"
                  width="80px"
                  height="80px"
                  border="0px"
                  className="mb-4"
                  alt="PostgreSQL"
                />
              </div>
            </div>

            <div className="card text-center text-white bg-secondary border-light mb-2 col-6 col-md-3 m-3">
              <h3 className="text-center mt-3">Node.js</h3>
              <div className="text-center">
                <img
                  src="/nodejs.svg"
                  width="80px"
                  height="80px"
                  border="0px"
                  className="mb-4"
                  alt="Node.js"
                />
              </div>
            </div>

            <div className="card text-center text-white bg-secondary border-light mb-2 col-6 col-md-3 m-3">
              <h3 className="text-center mt-3">Bootstrap</h3>
              <div className="text-center">
                <img
                  src="/bootstrap.svg"
                  width="80px"
                  height="80px"
                  border="0px"
                  className="mb-4"
                  alt="Bootstrap"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
