import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

import Header from './header';
import Footer from './footer';

import 'simple-line-icons/css/simple-line-icons.css';

// Global Styles
import '../../assets/scss/main.scss';

import styles from './layout.module.scss';

export const ConfigContext = React.createContext();

const Layout = ({location, title, children, wided}) => {

    const {site} = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                description
                author
                twitter
                github
                linkedin
            }
        }
    }
    `)

    const siteContext = {
        title: site.siteMetadata.title,
        description: site.siteMetadata.description,
        author: site.siteMetadata.author,
        twitter: site.siteMetadata.twitter,
        linkedin: site.siteMetadata.linkedin,
        github : site.siteMetadata.github
    }

    const container = wided ? styles.containerLayout : 'container ' + styles.containerLayout;
    return ( 
        <>
        <ConfigContext.Provider value={siteContext}>
            <Header/>
            <div className={container}>
                <div className={styles.content}>
                    {children}
                </div>
                <Footer/>
            </div>
        </ConfigContext.Provider>
        </>
     );
}
 
export default Layout;