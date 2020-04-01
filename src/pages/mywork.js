import React from 'react';
import Layout from '../components/shared/layout';
import SEO from '../components/seo';

import PortfolioContainer from '../components/portfolio/PortfolioContainer';

const MyWork = () => {
    return (
        <Layout>
          <SEO title="Mis trabajos" />
          <div className="ui__page">
            <div className="page__header ">
              <h1>Mis trabajos</h1>
              <hr/>
            </div>
            <div className="page__content">
              <div className="page__content-description">
                <p>Lo que se muestra en el siguiente portafolio son algunos de los trabajos mas recientes. Mis soluciones web te permiten mostrar tu negocio de una manera profesional y de calidad.</p>
              </div>
              <PortfolioContainer/>
            </div>
          </div>
        </Layout>
    )
}

export default MyWork;