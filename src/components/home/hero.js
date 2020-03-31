import React from 'react';
import { Link } from 'gatsby';

import styles from './hero.module.scss';

const Hero = () => {
    return (
        <div className={styles.hero__wrapper}>
            <div className={styles.hero__content}>
                <img src="/img/logo-color.png" className={styles.logo} alt=""/>

                <h4 className={styles.subtitle}>¡Hola! soy Alejandro y trabajo con</h4>
                <h1 className={styles.title}>Desarrollo Frontend</h1>

                <Link to="/contact" className={"btn btn-secondary " + styles.cta}>Contáctame</Link>

            </div>
        </div>
    )
}

export default Hero;
