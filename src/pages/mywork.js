import React from 'react';
import Layout from '../components/shared/layout';
import SEO from '../components/seo';

const MyWork = () => {
    return (
        <Layout>
          <SEO title="Mis trabajos" />
          <div className="ui__page">
            <div className="page__header">
              <h1>Mis trabajos</h1>
              <hr/>
            </div>
            <div className="page__content">
              <div className="page__content-description">
                <p>Sección en construcción <span role="img" aria-label="Hammer">🔨</span>.</p>
              </div>
            </div>
          </div>
        </Layout>
    )
}

export default MyWork;