import React from 'react'

const About =  () => {
    return (
        <section className="ui__section isDark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="ui__section-content">
                            <h2>Acerca de mí</h2>

                            <p>Me llamo Alejandro Vivas, y he trabajado por mas de 6 años con Desarrollo Frontend y Diseño Web. Tengo experiencia trabajando con diferentes tecnologías para Diseño Web tales como, <code>HTML5, CSS3/SASS, Javascript</code>.</p>
                            
                            <img src="/img/tech-logos.png" className="img-fluid d-block mt-4" alt="I love JavaScript"/>
                            <small className="font-weight-light my-3 d-block text-center">Demás está decir que mi lenguaje favorito es Javascript ❤</small>

                            <h5 className="mt-4 text-info">¿Herramientas de diseño?</h5>
                            <p>Manejo muy bien Adobe Photoshop, Illustrator, Xperience Design, Balsamiq, entre otros. Me gusta mucho preocuparme por el Look & Feel de un producto, así como también mantener principios básicos de UI / UX.</p>

                        </div>
                    </div>
                    <div className="col-sm-7">
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
