import React from 'react';
import {  graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/shared/layout';

import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {


  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                author
                twitter
                github
                linkedin
            }
        }
    }
  `)
  const iconStyles = {
    width: "20px",
    height: "20px",
    marginRight: "5px"
  }

    return ( 
        <Layout>
        <div className="ui__page">
            <div className="page__header">
              <h1>Contacto</h1>
              <hr/>
            </div>
            <div className="page__content">
              <div className="page__content-description">
                  <div className="row">
                      <div className="col-sm-6">
                          <div className="mb-2">
                            <p>Escríbeme para compartir ideas o soluciones que pueda aportar.</p>
                            <ContactForm/>
                          </div>
                      </div>
                      <div className="col-sm-6">
                          <div>
                              <p>Encuéntrame también en</p>

                              <ul>
                                    <li className="mb-2">
                                      <a href={data.site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer">
                                        <img src="/img/social/twitter-dark.png" alt="Twitter" style={iconStyles} /> Pixelagil
                                      </a>
                                    </li>
                                    <li className="mb-2">
                                      <a href={data.site.siteMetadata.github} target="_blank" rel="noopener noreferrer">
                                        <img src="/img/social/github-dark.png" alt="Github" style={iconStyles} /> AlexSegen
                                      </a>
                                    </li>
                                    <li className="mb-2">
                                      <a href={data.site.siteMetadata.linkedin} target="_blank" rel="noopener noreferrer">
                                        <img src="/img/social/linkedin-dark.png" alt="Linkedin" style={iconStyles} /> Alejandro-Vivas
                                      </a>
                                    </li>
                              </ul>

                              <h4 className="mt-5">¡Responderé <br/> lo antes posible! 🚀</h4>

                          </div>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </Layout>
     );
}
 
export default ContactPage;