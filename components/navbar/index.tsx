import React, { useState, useEffect } from 'react';

import Router, { useRouter,withRouter } from "next/router";
//二级分类
import Link from 'next/link'
// @ts-ignore

//全局apptsx传递路由
// @ts-ignore
export default function Index({menu}) {
    const [activeIndex,setActiveIndex]=useState(0)
    // @ts-ignore
    const router = useRouter();
    function handleClick(e){
        setActiveIndex(e)
    }
    useEffect(()=>{
        const index=menu.findIndex(i=>i.href===router.pathname)
        setActiveIndex(index)
    },[])

    return (
        <nav className={`navbar navbar-expand-md navbar-dark  bg-dark`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">在线服务</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            // @ts-ignore
                            menu.map((item,index)=>{
                                // @ts-ignore
                                return (
                                    // @ts-ignore
                                    <li className="nav-item" key={index} onClick={handleClick.bind(this,index) }>
                                        <Link href={item.href}>
                                            <a  className={`nav-link ${activeIndex===index && 'active'}`} aria-current="page" >{item.title}</a>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="找点什么..." aria-label="找点什么..."/>
                        <button className="btn btn-outline-success" type="submit">搜索</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
