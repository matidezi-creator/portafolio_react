import './AcercaDe.css';

const AcercaDe = () => {
    return (
        <section className="acercade" id="acerca-de">
            <div className="grid">
                <div className="col-1">
                    <div className="fotos">
                        <img src="./assets/acerca-de-1.jpg" className="foto" alt="Foto 1" />
                        <img src="./assets/acerca-de-2.png" className="foto" alt="Foto 2" />
                    </div>
                </div>

                <div className="col-2">
                    <h4 className="pretitulo">Acerca de mí</h4>
                    <h3 className="titulo">Quien soy como desarrollador junior</h3>
                    <div className="resumen">
                        <p>Soy Matías, desarrollador web junior con enfoque en crear sitios modernos, claros y funcionales. Me encuentro en pleno crecimiento profesional, y cada proyecto que realizo es una oportunidad para aprender, mejorar y entregar resultados de calidad. <br /></p>
                        
                        <p>Me caracterizo por ser detallista, curioso y comprometido. Disfruto comprender las necesidades de cada proyecto, planificar y construir soluciones eficientes, priorizando la experiencia del usuario y el rendimiento. <br /></p>
                        
                        <p>Aunque estoy dando mis primeros pasos en el mundo del desarrollo, aporto dedicación, responsabilidad y una mentalidad orientada a la mejora constante. Mi objetivo es construir proyectos sólidos, confiables y que generen valor real para las personas y los negocios que los utilizan. <br /></p>
                        
                        <p>Trabajemos juntos para crear algo increíble.</p>
                    </div>
                    <a href="#contacto" className="boton">
                        Mandame un mensaje
                        <span className="icono">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AcercaDe;
