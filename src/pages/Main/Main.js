import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Landing, About, Skills, Blog, Education, Contacts, Projects } from '../../components'
import { headerData } from '../../data/headerData'

function Main()
{
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>
            <Navbar />
            <Landing />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Blog />
            <Contacts />
        </div>
    )
}

export default Main
