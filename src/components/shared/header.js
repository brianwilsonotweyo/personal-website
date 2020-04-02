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
    const btnToggled = isToggled ? styles.nav__toggle__isOpen : null;

    return ( 
        <header className={styles.navbar}>
            <div className={styles.nav__container}>
                <button type="button" className={styles.nav__toggle + ' ' + btnToggled} onClick={() => setToggle(!isToggled)} >
                    <svg fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="8" x2="21" y1="12" y2="12"></line><line x1="15" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                </button>
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
                            <Link className={styles.nav__item + ' ' + styles.nav__itemFeatured} activeClassName={styles.active} to="/toastme">Toastme JS 📢</Link>
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