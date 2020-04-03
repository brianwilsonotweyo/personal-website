import React from 'react'
import Layout from '../components/shared/layout';
import { Link } from 'gatsby';

const NotFound = () => {

    return (
        <Layout>
            <h1>404</h1>
            <p>Page not found, <Link to="/">Go Home</Link></p>
        </Layout>
    )

}

export default NotFound;