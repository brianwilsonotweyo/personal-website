import React from 'react';
import Header from '../components/header'
import Footer from '../components/footer'

// Global Styles
import '../assets/scss/main.scss';

import styles from './layout.module.scss';

const Layout = (props) => {
    return ( 
        <>
            <Header/>
            <div className={styles.containerLayout}>
                <div className={styles.content}>
                    {props.children}
                </div>
                <Footer/>
            </div>
        </>
     );
}
 
export default Layout;