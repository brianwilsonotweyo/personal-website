import React from 'react'
import styles from './portfolio.module.scss';

const PortfolioItem = ({photo, thumb, name, description, category, url, published}) => {

    const validateURL = str => {
       return  str ? str.toString().trim().length > 0 : null;
    }

    return (
        <div href={url} className={styles.p__item}>
            <div className={styles.p__itemOverlay}>
            
                <div>
                    <a href={photo} className="btn btn-light" target="_blank" rel="noopener noreferrer">Previsualizar</a>
                    {
                        validateURL(url) ? 
                            <a className="btn btn-primary" href={url} target="_blank" rel="noopener noreferrer">Visitar Sitio</a>
                        : null
                    }
                    
                </div>
            </div>
            <img src={thumb} alt={name} className={styles.p__itemThumb}/>
            <div className={styles.p__itemCaption}>
                <h4 className={styles.p__itemTitle}>{name}</h4>
                <p className={styles.p__itemCategory}>{category}</p>
            </div>
        </div>
    )

}

export default PortfolioItem;