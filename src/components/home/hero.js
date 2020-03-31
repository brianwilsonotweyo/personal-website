import React, {useEffect} from 'react';
import { Link } from 'gatsby';

import { type, type as loop } from '@camwiegert/typical';

import styles from './hero.module.scss';

const Hero = () => {

    useEffect(() => {
        const el = document.getElementById('target');
        type(el, 'Desarrollo Frontend', 3000, 'Diseño Web', 3000, 'Diseño de UI/UX', 3000, loop)
    }, []);
    
    return (
        <div className={styles.hero__wrapper}>
            <div className={styles.hero__content}>
                <img src="/img/logo-color.png" className={styles.logo} alt=""/>

                <h4 className={styles.subtitle}>¡Hola! soy Alejandro y trabajo con</h4>
                <h1 className={styles.title} id="target">Desarrollo Frontend</h1>

                <Link to="/contact" className={"btn btn-secondary " + styles.cta}>Contáctame</Link>

            </div>
        </div>
    )
}

export default Hero;
