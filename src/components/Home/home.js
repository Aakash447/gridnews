import React from 'react'
import Header from './Header'
import Showcase from './Showcase'
import Polls from './Polls'
import './css/home.scss'
import './css/utility.scss'
import axios from 'axios'

function Home() {
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log('response:',res.data)
        }).catch(err=>{
            console.log('err:',err)
        })
    })
    return (
        <>
            <Header/>
            <Showcase/>
            <Polls/>
        </>
    )
}

export default Home
