import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/shared/layout';
import SEO from '../components/seo';
import Sidebar from '../components/shared/sidebar';
import styles from './about.module.scss';

const SkillItem = ({ name, logo }) => {

    return (
        <div className={styles.sk__item + " wow fadeInUp"}>
            <img className={styles.sk__itemIcon} src={'/img/tech/' + logo} alt={name}/>
            <span className={styles.sk__itemName}>{name}</span>
        </div>
    )
}

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="Acerca de mí" description="Soy Desarrollador Frontend / Diseñador Web desde hace más de 6 años."/>
            <div className="ui__page">
            <div className="page__header">
              <h1>Acerca de mí</h1>
              <hr/>
            </div>
            <div className="page__content">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4">
                        <Sidebar/>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-8">
                        <div className="page__content-description">
                            <div className=" wow fadeInUp">
                                <h4>Hola,</h4>
                                <p>Soy Desarrollador Frontend / Diseñador Web desde hace más de 6 años, enfocado en usabilidad, semántica y buenas prácticas de desarrollo. He trabajando como Freelance y también con pequeñas y grandes compañías.</p>

                                <p>Tengo experiencia usando <strong>Javascript, HTML, CSS / SCSS, VueJS, Angular y algo de React</strong>.</p>

                                <p>Me considero una persona con mucha disposición de aprender nuevas tecnologías.</p>
                            </div>

                            <div className="my-5">
                                <h2 className="mb-4  wow fadeInUp">Mis Skills</h2>
                                <div className={styles.sk__grid}>
                                    <SkillItem logo="html5.png" name="HTML 5" />
                                    <SkillItem logo="css.png" name="CSS3" />
                                    <SkillItem logo="vue.png" name="Vue JS" />
                                    <SkillItem logo="react.png" name="React JS" />
                                    <SkillItem logo="angular.png" name="Angular" />
                                    <SkillItem logo="node.png" name="Node JS" />
                                </div>
                            </div>

                            <div className="mb-5  wow fadeInUp">
                                <h4 className="text-muted mb-4">Aprendiendo</h4>
                                <div className={styles.sk__grid}>
                                    <SkillItem logo="reduxx.png" name="Redux" />
                                    <SkillItem logo="csharp.png" name="C#" />
                                    <SkillItem logo="graphql.png" name="Graphql" />
                                </div>
                            </div>

                            <div className="mb-5">
                            <h4>También conozco</h4>
                            <p>Consumo de API REST, Git Flow, Bootstrap, Photoshop. <span role="img" aria-label="Smile">😄</span></p>
                            </div>

                            <h3>¿Quieres conocer algunos de mis trabajos?</h3>
                            <br/>
                            <Link to="/mywork" className="btn btn-primary">Ir al Portafolio</Link>

                        </div>
                    </div>

                </div>
            </div>
          </div>
        </Layout>
    )
}

export default AboutPage;