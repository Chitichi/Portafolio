export default function SobreMi() {
  return (
    <>
      <div className="container d-flex justify-content-center" id="sobremi">
        <div class="row">
            <div class=" text-center text-white  col-md-6 col-sm-12 ">
              <h1>Hola! mi nombre es </h1> 
              <h1>Giuliana Vazquez</h1>
              <div class="text-center text-white " >
            <h4>
              Soy desarrolladora web apasionada y proactiva, especializada en la
              creación de soluciones innovadoras y funcionales. En constante
              búsqueda de desafíos y aprendizaje, valoro el trabajo en equipo y
              la colaboración para lograr resultados excepcionales. Mi portfolio
              refleja mi enfoque creativo y resolutivo, y demuestra mi capacidad
              para implementar proyectos exitosos. Si buscas una desarrolladora
              web entusiasta y comprometida, estoy emocionada por la oportunidad
              de contribuir a proyectos desafiantes en el futuro.
            </h4>
            <a href="/cv.pdf" class="card-link text-white">
              <img
                src="/cv.png"
                width="80px"
                height="80px"
                border="0px"
                class="mb-4"
              ></img>
            </a>
            
          </div>
            </div>
          <div class="text-center text-white col-md-6 d-none d-md-block">
            <img
              src="/foto.jpeg"
              width="420px"
              height="420px"
              border="2px"
              class="rounded-circle img-fluid"
            ></img>
          </div>
        
        </div>
      </div>
    </>
  );
}
