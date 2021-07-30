import '../styles/globals.less'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/antd.less'
import React, {useEffect} from "react";
import NavBar from "../components/navbar";
require('../styles/bootstrap.less')
import 'default-passive-events'
const menuList:any[]=[
    {
        title:'首页',
        icon:'',
        href:'/',
        children:[]
    },
    {
        title:'小工具',
        icon:'',
        href:'/tool',
        children:[]
    },
    {
        title:'读文章',
        icon:'',
        href:'/article',
        children:[]
    },
    {
        title:'写心情',
        icon:'',
        href:'/mood',
        children:[]
    },
    {
        title:'爱分享',
        icon:'',
        href:'/share',
        children:[]
    },
]
function MyApp({ Component, pageProps }: AppProps) {
    return (
    <>
        <Head>
            <title>在线服务</title>
            <meta name="description" content="提供一些在线服务，包括但不限于文章阅读，心情随笔，日常分享，便利工具..."/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                  crossOrigin="anonymous"/>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                    crossOrigin="anonymous"></script>
        </Head>
        <header className="header">
            <NavBar menu={menuList}/>
        </header>
        <Component {...pageProps} />
        <footer style={{paddingBottom:'50px'}}></footer>
    </>
  )
}
export default MyApp
