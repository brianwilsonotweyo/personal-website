import React, {useState, useEffect} from 'react';
import PortfolioItem from './portfolio-item';
import { getProjects } from '../../services/api';

import styles from './portfolio.module.scss';

const Spinner = () => {
    return  (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

const PortfolioContainer = () => {
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    
    const getPorfolio = () => {
        setLoading(true)
    
        getProjects().then(res => {
            const array = res.projects.reverse();
            setItems(array)
            setLoading(false)
        }).catch(err => {
            setLoading(false);
            console.log('Error', err);
        });
    }

    useEffect(() => {
        getPorfolio();
    }, []);
    

    return loading ? <Spinner/> : 
    <div className={styles.p__grid}>
        {
            loading ? <Spinner/> : 
            items.map(i => <PortfolioItem
                    photo={i.photo}
                    thumb={i.thumb}
                    name={i.name}
                    description={i.description}
                    category={i.category}
                    url={i.url}
                    published={i.published}
                    key={i.id} />)
        }
    </div>
}

export default PortfolioContainer;