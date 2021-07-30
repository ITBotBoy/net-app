import TabBar from '../components/tabbar'
import {StarOutlined, LikeOutlined, MessageOutlined} from "@ant-design/icons";
import React from "react";
import {Space} from "antd";
// @ts-ignore

// @ts-ignore
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
export default function Tool() {
    function handleChange(e:number){
        console.log(e)
    }
    return (
        <main className="container">
            <style jsx>{`
                .row .col-lg-4 {
                   margin-bottom: 20px;
                }
              
              
            `}</style>
            <TabBar handleChange={handleChange}>
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
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </TabBar>
        </main>
    )
}
