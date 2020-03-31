import React from 'react'

const About =  () => {
    return (
        <section className="ui__section isDark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="ui__section-content">
                            <h2>Acerca de mí</h2>

                            <p>Me llamo Alejandro Vivas, y he trabajado por mas de 6 años con Desarrollo Frontend y Diseño Web.</p>
                            <p>Tengo experiencia trabajando con diferentes tecnologías para Diseño Web tales como, HTML5, CSS3/SASS, Javascript</p>

                            
                            <img src="/img/tech-logos.png" className="img-fluid" alt="I love JavaScript"/>
                            <h5 className="font-weight-light my-3 text-info">Demás está decir que mi lenguaje favorito es Javascript ❤</h5>

                            <p className="mt-5"><strong>¿Herramientas de diseño?</strong> Manejo muy bien Adobe Photoshop, Illustrator, Experience Design, Balsamiq, entre otros.</p>

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="ui__section-content">
                            <img src="/img/carbon-react.png" className="img-fluid" alt="I love React"/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
