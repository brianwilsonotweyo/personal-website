import React from 'react'

import styles from './features.module.scss';

const Features = () => {
    return (
        <section className="ui__section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-sm-12">
                        <div className="ui__section-content">
                                <h2 className="ui__section-title text-center mywork mb-5">¿Cómo es mi trabajo?</h2>
                                <div className={styles.f__box}>

                                    <div>
                                        <div className={styles.f__boxItem}>
                                            <h4>DISEÑO RESPONSIVE</h4>
                                            <p>Sitio Web 100% adaptativo. Tu sitio se verá bien tanto en PC como en dispositivos móviles.</p>
                                        </div>

                                        <div className={styles.f__boxItem}>
                                            <h4>DISEÑO MODERNO</h4>
                                            <p>Obtendrás un trabajo de altura, calidad y además con las últimas tecnologías de desarrollo web.</p>
                                        </div>

                                        <div className={styles.f__boxItem}>
                                            <h4>RÁPIDO Y ÓPTIMO</h4>
                                            <p>La mejor experiencia de usuario está garantizada, tus clientes navegarán con la mejor rapidéz.</p>
                                        </div>
                                    </div>

                                    <div>
                                        <img src="http://placehold.it/800x1200" className="img-fluid" alt="Site Mockup"/>
                                    </div>

                                    <div>
                                        <div className={styles.f__boxItem + ' ' + styles.isDark}>
                                            <h4>PARA BUSCADORES</h4>
                                            <p>Listo para ser encontrado a través de los buscadores más populares y obtener presencia en Internet.</p>
                                        </div>

                                        <div className={styles.f__boxItem + ' ' + styles.isDark}>
                                            <h4>RÁPIDO Y ÓPTIMO</h4>
                                            <p>La mejor experiencia de usuario está garantizada, tus clientes navegarán con la mejor rapidéz.</p>
                                        </div>
                                    </div>

                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;