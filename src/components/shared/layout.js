import React from 'react';
import Header from './header'
import Footer from './footer'

// Global Styles
import '../../assets/scss/main.scss';

import styles from './layout.module.scss';

const Layout = (props) => {
    return ( 
        <>
            <Header/>
            <div className={'container ' + styles.containerLayout }>
                <div className={styles.content}>
                    {props.children}
                </div>
                <Footer/>
            </div>
        </>
     );
}
 
export default Layout;