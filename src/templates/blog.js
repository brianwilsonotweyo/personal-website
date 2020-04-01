import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/shared/layout';
import SEO from "../components/seo"

export const query = graphql`
    query($slug: String!) {
        site {
          siteMetadata {
            title
          }
        }
        markdownRemark(fields: { slug: { eq: $slug} }) {
            frontmatter {
              title
              date
              description
            }
            html
            excerpt(pruneLength: 160)
        }
    }
`;

const Blog = ({data, pageContext, location }) => {

  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  //const { previous, next } = pageContext

    return (
      <Layout location={location} title={siteTitle}>

      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

<div className="ui__page">
            <div className="page__header">
              <h1>{post.frontmatter.title}</h1>
              <p className="page__header-metas">Publicado {post.frontmatter.date}</p>
              <ul className="page__header-breadcrumb">
                  <li><Link to="/">Inicio</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li>{post.frontmatter.title}</li>
              </ul>
              <hr/>
            </div>
            <div className="page__content">
              <div className="page__content-description" dangerouslySetInnerHTML={{
                __html: post.html
            }}>
                
              </div>
            </div>
          </div>
        </Layout>
    )
}

export default Blog;