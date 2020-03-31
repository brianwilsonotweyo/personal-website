import React from "react";
import LayoutWided from '../components/layout-wided';

import Hero from '../components/home/hero';
import About from '../components/home/about';

const IndexPage = () => {

    return ( 
        <LayoutWided>
            <Hero/>
            <About/>
        </LayoutWided>
    )
}

export default IndexPage;