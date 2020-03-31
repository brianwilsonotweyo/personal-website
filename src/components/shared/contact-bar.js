import React from 'react';
import { Link } from 'gatsby';
import styles from './contact-bar.module.scss';

const ContactBar = props => {
    const { btnText, contentText, contentSubText, isDark } = props;

    const classes = styles.cb__wrapper;
    const dark = isDark ? styles.cb__wrapper__isDark : ''

    return (
        <div className={classes + ' ' + dark }>
            <div className={styles.cb__wrapperContent}>
                <h2>{ contentText }</h2>
                {
                    contentSubText ? <p>{ contentSubText }</p> : null
                }
            </div>
            <div className={styles.cb__wrapperAction}>
                <Link className={'btn btn-secondary ' + styles.cta} to="/contact">{ btnText }</Link>
            </div>
        </div>
    )
}

export default ContactBar;