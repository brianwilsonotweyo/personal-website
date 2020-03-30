import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import styles from './header.module.scss';

const Header = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return ( 
        <header className={styles.navbar}>
            <div className={styles.nav__container}>
                <div className={styles.nav__branding}>
                    <Link className={styles.title}  to="/">
                        <img className={styles.logo} src="http://placehold.it/200x50" alt={data.site.siteMetadata.title}/>
                    </Link>
                </div>
                <div className={styles.nav__body}>
                    <nav className={styles.nav__menu}>
                        <li>
                            <Link className={styles.nav__item} activeClassName={styles.active} to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link className={styles.nav__item} activeClassName={styles.active} to="/about">Acerca de mi</Link>
                        </li>
                        <li>
                            <Link className={styles.nav__item} activeClassName={styles.active} to="/work">Mis trabajos</Link>
                        </li>
                        <li>
                            <Link className={styles.nav__item} activeClassName={styles.active} to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className={styles.nav__item} activeClassName={styles.active} to="/contact">Contactame</Link>
                        </li>
                    </nav>
                </div>
            </div>
        </header>
     );
}
 
export default Header;