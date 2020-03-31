import React from "react";
import LayoutWided from '../components/shared/layout-wided';

import Hero from '../components/home/hero';
import About from '../components/home/about';
import Features from '../components/home/features';
import ContactBar from '../components/shared/contact-bar';

const IndexPage = () => {

    return ( 
        <LayoutWided>
            <Hero/>
            <About/>
            <Features/>
            <ContactBar 
            isDark={true}
            btnText="Escríbeme" 
            contentText="¿Tienes una idea para tu nuevo proyecto?" 
            contentSubText="Yo puedo ayudarte a hacerlo realidad."/>
        </LayoutWided>
    )
}

export default IndexPage;