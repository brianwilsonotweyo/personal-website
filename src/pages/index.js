import React from "react";
import { Link } from 'gatsby';
import LayoutWided from '../components/layout-wided';

import Hero from '../components/home/hero';

const IndexPage = () => {

    return ( 
        <LayoutWided>
            <Hero/>
            <div className="container">
                <h1>Hello!</h1>
                I'm <strong>Alejandro</strong>.
                <p>Need a developer? <Link to="/contact">Contact me</Link></p>
            </div>
        </LayoutWided>
    )
}

export default IndexPage;