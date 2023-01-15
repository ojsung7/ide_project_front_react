import React from 'react'
import Header from './Header'

import './main.css'
import Main_container from './Main_container'
import Sub_container from './Sub_container'

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Sub_container />
                <Main_container />
            </main>
        </>
    )
}

export default Main