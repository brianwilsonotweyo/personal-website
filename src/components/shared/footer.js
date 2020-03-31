import React from 'react';
import {  graphql, useStaticQuery } from 'gatsby';

import styles from './footer.module.scss';

const Footer = () => {
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

    return ( 
        <div className={styles.footer}>
            <div className="row">
                <div className="col-sm-6">
                    <div className={styles.copyright}>AlexLab, <strong>&copy; { (new Date()).getFullYear()}</strong></div>
                </div>
                <div className="col-sm-6 text-right">
                    <ul className={styles.socialList}>
                        <li>
                            <a href={data.site.siteMetadata.twitter} target="_blank" rel="noopener noreferrer">
                                <img src="/img/social/twitter-dark.png" alt="Twitter"/>
                            </a>
                        </li>
                        <li>
                            <a href={data.site.siteMetadata.linkedin} target="_blank" rel="noopener noreferrer">
                                <img src="/img/social/linkedin-dark.png" alt="Linedin"/>
                            </a>
                        </li>
                        <li>
                            <a href={data.site.siteMetadata.github} target="_blank" rel="noopener noreferrer">
                                <img src="/img/social/github-dark.png" alt="Github"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;