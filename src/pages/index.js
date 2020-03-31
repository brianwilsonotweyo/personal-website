import React from "react";
import LayoutWided from '../components/layout-wided';

import Hero from '../components/home/hero';
import About from '../components/home/about';
import Features from '../components/home/features';

const IndexPage = () => {

    return ( 
        <LayoutWided>
            <Hero/>
            <About/>
            <Features/>
        </LayoutWided>
    )
}

export default IndexPage;