import React from 'react'

import styles from './features.module.scss';

const Features = () => {
    return (
        <section className="ui__section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12">
                        <div className="ui__section-content">
                                <h2 className="ui__section-title text-center mywork mb-5">¿Cómo trabajo?</h2>
                                <div className={styles.f__box}>

                                    <div>
                                        <div className={styles.f__boxItem}>
                                            <span className={styles.icon + ' ' + styles.icon__responsive}></span>
                                            <h4>DISEÑO RESPONSIVE</h4>
                                            <p>Realizo diseños 100% adaptativos. Que se vean bien tanto en PC como en dispositivos móviles.</p>
                                        </div>

                                        <div className={styles.f__boxItem + ' ' + styles.isDark}>
                                        <span className={styles.icon + ' ' + styles.icon__modern}></span>
                                            <h4>DISEÑO MODERNO</h4>
                                            <p>Mantengo trabajo de altura, calidad y además con las últimas tecnologías de desarrollo web.</p>
                                        </div>

                                        <div className={styles.f__boxItem}>
                                        <span className={styles.icon + ' ' + styles.icon__fast}></span>
                                            <h4>RÁPIDO Y ÓPTIMO</h4>
                                            <p>Garantizo la mejor experiencia de usuario, los usuarios navegarán con la mejor rapidéz.</p>
                                        </div>
                                    </div>

                                    <div className={styles.media}>
                                        <img src="/img/web-mockup.png" className="img-fluid" alt="Site Mockup"/>
                                    </div>

                                    <div>
                                    <div className={styles.f__boxItem}>
                                            <span className={styles.icon + ' ' + styles.icon__search}></span>
                                            <h4>PARA BUSCADORES</h4>
                                            <p>Sitios listos para ser encontrados a través de los buscadores más populares y obtener presencia en Internet.</p>
                                        </div>

                                        <div className={styles.f__boxItem + ' ' + styles.isDark}>
                                        <span className={styles.icon + ' ' + styles.icon__professional}></span>
                                            <h4>DISEÑO PROFESIONAL</h4>
                                            <p>Diseños y desarrollos por un profesional con mas de 6 años de experiencia en grandes proyectos.</p>
                                        </div>

                                        <div className={styles.f__boxItem}>
                                        <span className={styles.icon + ' ' + styles.icon__professional}></span>
                                            <h4>DISEÑO PROFESIONAL</h4>
                                            <p>Diseños y desarrollos por un profesional con mas de 6 años de experiencia en grandes proyectos.</p>
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