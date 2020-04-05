import React from 'react'

const About =  () => {

    const techStyles = {
        maxWidth: "70%",
        margin: "0 auto"
    }
    return (
        <section className="ui__section isDark">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="ui__section-content">
                            <h2 className="ui__section-title about wow fadeInUp">Acerca de mí</h2>

                            <p className="wow fadeInUp">Me llamo Alejandro Vivas, y he trabajado por mas de 6 años con Desarrollo Frontend y Diseño Web. Tengo experiencia con diferentes tecnologías tales como, <strong>HTML5, CSS3/SASS, Javascript</strong>.</p>
                            
                            <img src="/img/tech-logos.png" style={techStyles} className="img-fluid d-block mt-4 wow fadeInUp" alt="I love JavaScript"/>
                            <code className="font-weight-light my-3 d-block text-center wow fadeInUp">Demás está decir que mi lenguaje favorito es Javascript ❤</code>

                            <h5 className="mt-4 wow fadeInUp">¿Herramientas de diseño?</h5>
                            <p className="wow fadeInUp">Manejo muy bien Adobe Photoshop, Illustrator, Xperience Design, Balsamiq, entre otros. Me preocupo mucho por el Look & Feel de un producto, así como también mantener principios básicos de UI / UX.</p>

                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="ui__section-content">
                            <img src="/img/carbon-react.jpg" className="img-fluid" alt="I love React"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
