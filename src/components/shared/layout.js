import React from 'react';
import Header from './header';
import Footer from './footer';

import 'animate.css/animate.css';
import 'simple-line-icons/css/simple-line-icons.css';

// Global Styles
import '../../assets/scss/main.scss';

import styles from './layout.module.scss';

const Layout = ({location, title, children, wided}) => {

    const container = wided ? styles.containerLayout : 'container ' + styles.containerLayout;
    return ( 
        <>
            <Header/>
            <div className={container}>
                <div className={styles.content}>
                    {children}
                </div>
                <Footer/>
            </div>
        </>
     );
}
 
export default Layout;