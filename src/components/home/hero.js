import React, {useEffect} from 'react';
import { Link } from 'gatsby';

import { type, type as loop } from '@camwiegert/typical';

import styles from './hero.module.scss';

const Hero = () => {

    useEffect(() => {
        const el = document.getElementById('target');
        type(el, 'Desarrollo Frontend', 2000, 'Diseño Web', 2000, 'Diseño de UI/UX', 2000, loop)
    }, []);
    
    return (
        <div className={styles.hero__wrapper}>
            <div className="container">
                <div className={styles.hero__content  + " wow fadeInUp"}>
                    <h4 className={styles.subtitle}>Actualmente trabajo con</h4>
                    <h1 className={styles.title} id="target">Desarrollo Frontend</h1>
                    <div>
                        <Link to="/contact" className={"btn btn-secondary " + styles.cta}>Contáctame</Link>
                        <Link to="/mywork" className={"btn btn-link " + styles.mywork}>Mis trabajos</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
