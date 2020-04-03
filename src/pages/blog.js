import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/shared/layout';
import SEO from '../components/seo';
import Sidebar from '../components/shared/sidebar';

import styles from './blog.module.scss';

const Blog =() => {

    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }`);

    const posts  = data.allContentfulBlogPost.edges;

    return (
        <Layout>
          <SEO title="Blog" />
          <div className="ui__page">
            <div className="page__header">
              <h1>Blog</h1>
              <hr/>
            </div>
            <div className="page__content">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-4">
                  <Sidebar/>
                </div>
                <div className="col-lg-9 col-md-8 col-sm-8">
                    <div className="page__content-description">
                      <p>Algún contenido que encontré interesante para compartir.</p>
                    </div>
                    <div className={styles.blog__grid}>

                    {
                      posts.map((item, index) => (
                        <Link  to={`/blog/${item.node.slug}`} className={styles.blog__post}>
                          <div className={styles.blog__postCover}>
                              <img src="http://placehold.it/400x180" alt={styles.blog__postTitle}/>
                          </div>
                          <h2 className={styles.blog__postTitle}>
                                {item.node.title}
                          </h2>
                          <div className={styles.blog__postMetas}>
                            {item.node.publishedDate}
                          </div>
                        </Link>
                        ))
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