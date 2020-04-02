import React from 'react';
import Layout from '../components/shared/layout';
import SEO from '../components/seo';

import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './blog.module.scss';

const Blog =() => {

    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }`);

    const { edges } = data.allMarkdownRemark;

    return (
        <Layout>
          <SEO title="Blog" />
          <div className="ui__page">
            <div className="page__header">
              <h1>Blog</h1>
              <hr/>
            </div>
            <div className="page__content">
              <div className="page__content-description">
                <p>Algún contenido que encontré interesante para compartir.</p>
              </div>
              <ol className={styles.posts}>
                {
                    edges.map((item, index) => (
                        <li className={styles.post + " wow fadeInUp"} key={index}>
                          <Link to={`/blog/${item.node.fields.slug}`}>
                            <h2>{item.node.frontmatter.title}</h2>
                            <p>{item.node.frontmatter.date}</p>
                          </Link>
                        </li>
                    ))
                }
              </ol>
            </div>
          </div>
        </Layout>
    )
}

export default Blog;