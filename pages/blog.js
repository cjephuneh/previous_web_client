import React from 'react'
import Head from 'next/head'
import Header from '../components/blog/Header.jsx'
import LatestArticles from '../components/blog/Latestarticles.jsx'

import FrequentlyAsked from '../components/utils/frequentasked.jsx'
import TrackUser from '../components/utils/trackuser.jsx'
import { useSelector } from 'react-redux'

const blog = () => {
    const blogs = useSelector(state => state.blog.blogs)
    return(
        <>
        <Head>
            <title>
                Blog | Proxima
            </title>
        </Head>
        <div className="page-wrapper">
        <main className="main-wrapper">
        <Header />
        <LatestArticles/>
        <FrequentlyAsked />
        <TrackUser />
        </main>
    
  </div>
  </>
    )
}

export default blog