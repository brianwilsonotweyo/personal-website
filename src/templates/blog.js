import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/shared/layout';
import SEO from "../components/seo"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {
      eq: $slug
    }) {
      title
      publishedDate(formatString: "MMMM, Do, YYYY")
      body {
        json
      }
    }
  }

`


const Blog = ({data, pageContext, location }) => {

    //const { previous, next } = pageContext

    const imgStyles = {
      maxWidth: "100%",
      height: "auto",
      margin: "10px auto",
      display: "block",
      borderRadius:"3px",
      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 25px"
    }

    const options = {
      renderNode: {
        "embedded-asset-block": (node) => {
          const alt = node.data.target.fields.title['en-US'];
          const url = node.data.target.fields.file['en-US'].url;
          return <img style={imgStyles} alt={alt} src={url} />
        }
      }
    }

    return (
      <Layout location={location} title={"siteTitle"}>

      <SEO
        title={data.contentfulBlogPost.title}
        description="Blog"
      />

<div className="ui__page">
            <div className="page__header text-center">
              <h1>{data.contentfulBlogPost.title}</h1>
              <p className="page__header-metas">Publicado {data.contentfulBlogPost.publishedDate}</p>
              <ul className="page__header-breadcrumb">
                  <li><Link to="/">Inicio</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li>{data.contentfulBlogPost.title}</li>
              </ul>
              <hr/>
            </div>
            <div className="page__content">
              <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                  <div className="page__content-description">
                    {
                      documentToReactComponents(data.contentfulBlogPost.body.json, options)
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
    )
}

export default Blog;