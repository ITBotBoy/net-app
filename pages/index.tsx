import React, { useState, useEffect } from 'react';
// @ts-ignore
import styles from '../styles/Index.module.less'
import { Space} from 'antd'

import {LikeOutlined, MessageOutlined, RightOutlined, StarOutlined} from '@ant-design/icons'
// @ts-ignore
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
import Link from 'next/link'
export default function Index() {
    return (
        <div className="navWrap">
            <main className="container">
                <div className={`row ${styles.part1}`}>
                    <div className="col-md-8">
                        <div className="card">
                            <div className={`card-header ${styles.linkItem}`}>
                                <span>BING</span>
                                <a className={styles.linkItem}
                                   rel="external nofollow noopener noreferrer"
                                   target="_blank"
                                   href="https://bing.renserve.com/">more <RightOutlined/></a>
                            </div>
                            <div className={`carousel slide ${styles.carouselWrap}`} data-bs-ride="carousel">
                                <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                        </div>
                                <div className={`carousel-inner ${styles.carouselContent}`}>
                                    <div className={`carousel-item active ${styles.carouselItem}`}>
                                        <a href="/"
                                           rel="external nofollow noopener noreferrer"
                                           target="_blank">
                                            <img  className={`d-block w-100 ${styles.img}`} src="https://cn.bing.com/th?id=OHR.DancingTrees_ZH-CN2946844631_800x600.jpg"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`card ${styles.rightCard}`}>
                            <div className="card-header">
                                热门资讯
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a href="https://www.baidu.com/"
                                       className={`${styles.hotContent} ${styles.linkItem}`}
                                       rel="external nofollow noopener noreferrer"
                                       target="_blank">
                                        <p className={styles.hotTitle}>
                                            An itemAn itemAn itemAn itemAn itemAn itemAn itemAn item
                                        </p>
                                        <RightOutlined/>
                                    </a>
                                </li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div>
                        <div className={`card ${styles.rightCard}`}>
                            <div className="card-header">
                                热门文章
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <a href="https://www.baidu.com/"
                                       className={`${styles.hotContent} ${styles.linkItem}`}
                                       rel="external nofollow noopener noreferrer"
                                       target="_blank">
                                        <p className={styles.hotTitle}>
                                            An itemAn itemAn itemAn itemAn itemAn itemAn itemAn item
                                        </p>
                                        <RightOutlined/>
                                    </a>
                                </li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div>
                        <div className={`card ${styles.rightCard}`}>
                            <div className="card-header">
                                每日一言
                            </div>
                            <div className="card-body">
                                {/*<blockquote className="blockquote mb-0"></blockquote>*/}
                                <p>A well-known quote, contained in a blockquote element.</p>
                                <footer className="blockquote-footer">Someone famous in <cite
                                    title="Source Title">Source Title</cite></footer>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`card ${styles.part2}`}>
                    <style jsx>{`
                          .row .col-lg-4 {
                               margin: 8px 0;
                          }
        
    
                    `}</style>
                    <div className={`card-header ${styles.linkItem}`}>
                        <span>常用工具</span>
                        <Link href="/tool">
                            <a  className={styles.linkItem}>more <RightOutlined/></a>
                        </Link>
                    </div>
                    <div className={`card-body`}>
                        <div className={`row`}>
                            <div className="col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="iconWrap">
                                            <img width={60} height={60}
                                                 src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" alt=""/>
                                            <h5 className="card-title">Card title</h5>
                                        </div>
                                        <p className="card-text">This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                    <div className={`card-footer bg-transparent iconFooter`}>
                                        <IconText icon={StarOutlined} text="1" key="list-vertical-star" />
                                        <IconText icon={LikeOutlined} text="2" key="list-vertical-like" />
                                        <IconText icon={MessageOutlined} text="3" key="list-vertical-message" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
