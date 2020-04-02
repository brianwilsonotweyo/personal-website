import React from 'react';
import SocialList from './social-list';

import styles from './sidebar.module.scss';

const Sidebar = ({ children }) => {
    return (

    <div className="page__content-description" >
        <div className={styles.side__box}>
            <img src="/img/me.jpg" alt="Yo" className={styles.side__boxPhoto} />
            <p className={styles.side__boxName}>Alejandro Vivas</p>
            <p className={styles.side__boxRol}><strong>Frontend Developer</strong></p>
            <SocialList/>
            
            <hr/>
            
            { children }

        </div>
    </div>
    )
}

export default Sidebar;
