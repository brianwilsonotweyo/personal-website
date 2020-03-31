import React, {useState} from 'react';
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

    const [isToggled, setToggle] = useState(false);

    const toggleClass = isToggled ? styles.nav__body__isToggled : null;

    return ( 
        <header className={styles.navbar}>
            <div className={styles.nav__container}>
                <button type="button" className={styles.nav__toggle} onClick={() => setToggle(!isToggled)} >X</button>
                <div className={styles.nav__branding}>
                    <Link className={styles.title}  to="/">
                        <img className={styles.logo} src="/img/logo-color.png" alt={data.site.siteMetadata.title}/>
                    </Link>
                </div>
                <div className={styles.nav__body + ' ' + toggleClass}>
                    <nav className={styles.nav__menu}>
                        <li>
                            <Link className={styles.nav__item} activeClassName={styles.active} to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link className={styles.nav__item} activeClassName={styles.active} to="/about">Acerca de mi</Link>
                        </li>
                        <li>
                            <Link className={styles.nav__item} activeClassName={styles.active} to="/mywork">Mis trabajos</Link>
                        </li>
                        <li>
                            <Link className={styles.nav__item} activeClassName={styles.active} to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className={styles.nav__item} activeClassName={styles.active} to="/contact">Contáctame</Link>
                        </li>
                    </nav>
                </div>
            </div>
        </header>
     );
}
 
export default Header;