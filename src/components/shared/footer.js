import React from 'react';
import SocialList from './social-list';

import styles from './footer.module.scss';

const Footer = () => {

    return ( 
        <div className={styles.footer}>
            <div className="row">
                <div className="col-sm-6">
                    <div className={styles.copyright}>AlexLab, no <strong>copyright</strong> 😁 { (new Date()).getFullYear()}</div>
                </div>
                <div className="col-sm-6 text-right">
                    <SocialList/>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;