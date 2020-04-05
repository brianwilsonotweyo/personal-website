import React, { useContext } from 'react';
import { ConfigContext } from './layout';
import styles from './social-list.module.scss';

const SocialList = () => {

    const context = useContext(ConfigContext);

    return (
        <ul className={styles.socialList}>
            <li>
                <a href={context.twitter} target="_blank" rel="noopener noreferrer">
                    <img src="/img/social/twitter-dark.png" alt="Twitter"/>
                </a>
            </li>
            <li>
                <a href={context.linkedin} target="_blank" rel="noopener noreferrer">
                    <img src="/img/social/linkedin-dark.png" alt="Linedin"/>
                </a>
            </li>
            <li>
                <a href={context.github} target="_blank" rel="noopener noreferrer">
                    <img src="/img/social/github-dark.png" alt="Github"/>
                </a>
            </li>
        </ul>
    )

}

export default SocialList;
