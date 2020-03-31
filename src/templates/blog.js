import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/shared/layout';

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug} }) {
            frontmatter {
                title
                date
            }
            html

        }
    }
`;

const Blog = props => {
    return (
        <Layout>

<div className="ui__page">
            <div className="page__header">
              <h1>{props.data.markdownRemark.frontmatter.title}</h1>
              <p className="page__header-metas">Publicado {props.data.markdownRemark.frontmatter.date}</p>
              <ul className="page__header-breadcrumb">
                  <li><Link to="/">Inicio</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li>{props.data.markdownRemark.frontmatter.title}</li>
              </ul>
              <hr/>
            </div>
            <div className="page__content">
              <div className="page__content-description" dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html
            }}>
                
              </div>
            </div>
          </div>
        </Layout>
    )
}

export default Blog;