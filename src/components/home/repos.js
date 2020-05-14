import React, {useState, useEffect} from 'react'
import styles from './repos.module.scss';

import { getRepos } from '../../services/api';


const ReposGrid = ({isDark}) => {

    const [loading, setLoading] = useState(false);
    const [projects, setProjects] = useState([]);

    const truncateText = str => {
        return str ? str.substr(0, 150) : ""
    }

    const gitStyles = {
        width: "20px",
        height: "20px",
        marginRight: "5px"
    }

    useEffect(() => {
        
        setLoading(true)
        getRepos().then(res => {
            const ids = [178255527, 187285302, 231851225, 232661146, 252233823, 181121746, 263526757, 261034049]
            const filtered = res.filter(item => ids.includes(item.id));
            setProjects(filtered);
            setLoading(false)
        }).catch(err => {
            setLoading(false)
            console.log('Error loading repos: ', err);
        })

    },[])

    return (
        <div className={styles.ui__reposContainer}>
            <h3 className="mb-4">Open source</h3>

            <div className={styles.ui__reposGrid}>
                {
                    loading ? <div>Cargando...</div> :

                    projects.map(item => (
                        <a key={item.id} className={typeof isDark !== 'undefined' ? styles.ui__reposItem + ' ' + styles.ui__reposItemIsDark : styles.ui__reposItem } href={item.html_url} target="_blank" rel="noopener noreferrer">
                            <h4>{item.name}</h4>
                            <p>{truncateText(item.description)}</p>
                            <div className={styles.ui__reposStats}>
                                <div>
                                    <svg height="16" className="octicon octicon-star v-align-text-bottom" vertical_align="text_bottom" viewBox="0 0 14 16" version="1.1" width="14" aria-hidden="true"><path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg> {item.stargazers_count}
                                </div>
                                <div>
                                    <svg className="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fillRule="evenodd" d="M8 1a1.993 1.993 0 00-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 002 1a1.993 1.993 0 00-1 3.72V6.5l3 3v1.78A1.993 1.993 0 005 15a1.993 1.993 0 001-3.72V9.5l3-3V4.72A1.993 1.993 0 008 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg> {item.forks_count}
                                </div>
                            </div>
                        </a>
                    ))

                }
            </div>
            <div className="mt-3 text-right">
                <a href="https://github.com/AlexSegen" target="_blank" className="btn btn-default d-inline-flex" rel="noopener noreferrer">
                <svg style={gitStyles} viewBox="0 0 16 16" version="1.1"  aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    Ver más repositorios</a>
            </div>
        </div>

    )
}

export default ReposGrid;