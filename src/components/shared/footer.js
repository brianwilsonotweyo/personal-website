import React from 'react';
import {  graphql, useStaticQuery } from 'gatsby';
import SocialList from './social-list';

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
                    <div className={styles.copyright}>AlexLab, no <strong>copyright</strong> 😁 { (new Date()).getFullYear()}</div>
                </div>
                <div className="col-sm-6 text-right">
                    <SocialList/>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;