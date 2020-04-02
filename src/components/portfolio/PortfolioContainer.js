import React from 'react';
import PortfolioItem from './portfolio-item';

import data from './data.json';

import styles from './portfolio.module.scss';

const PortfolioContainer = () => {

    const items = data.projects.reverse();

    const filteredItems = items.filter(i => i.published);
    
    return (
    <div className={styles.p__grid}>
        {
            filteredItems.map(i => <PortfolioItem
                    photo={i.photo}
                    thumb={i.thumb}
                    name={i.name}
                    description={i.description}
                    category={i.category}
                    url={i.url}
                    published={i.published}
                    key={i.id} />)
        }
    </div>)
}

export default PortfolioContainer;