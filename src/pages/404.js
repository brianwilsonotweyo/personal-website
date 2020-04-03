import React from 'react'
import Layout from '../components/shared/layout';
import { Link } from 'gatsby';
import SEO from '../components/seo';

const NotFound = () => {

    return (
        <Layout>
            <SEO title="Página no encontrada" description="Soy Desarrollador Frontend / Diseñador Web desde hace más de 6 años."/>
            <div className="ui__page">
                <div className="page__content">
                    <div className="page__content-description">
                        <div className="page__error">
                            <div className="page__error-content">
                                <img src="/img/logo-color.png" alt="Alexlab" className="page__error-logo"/>

                                <h1 className="page__error-code">404</h1>
                                <h3 className="page__error-title">Página no encontrada</h3>

                                <p className="text-muted">No encontré la página que estabas buscando, o no tienes permiso para acceder.</p>

                                <p><Link to="/" className="btn btn-default">Regresar al Inicio</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )

}

export default NotFound;