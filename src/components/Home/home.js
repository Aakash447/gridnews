import React from 'react'
import Header from './Header'
import Showcase from './Showcase'
import Polls from './Polls'
import './css/home.scss'
import './css/utility.scss'

function Home() {
    return (
        <>
            <Header/>
            <Showcase/>
            <Polls/>
        </>
    )
}

export default Home
