import TabBar from '../components/tabbar'
// @ts-ignore

export default function Mood() {
    function handleChange(e:number){
        console.log(e)
    }
    return (
        <main className="container">
            <style jsx>{`
                .moodWrap >div {
                   margin-bottom: 20px;
                }
            `}</style>
            <TabBar handleChange={handleChange}>
                <div className={`row moodWrap`}>
                    <div className="col-lg-4">
                        <div className="card">
                                <img src="https://www.lmcjl.com/public/index/img/1253lmcjl1554218824.jpg"
                                     className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
                        </div>
                        {/*<div className="card">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img src="//source.renserve.com/assets/img/2020/12/29/e365542e-4999-11eb-9c39-00163e1423c2.jpg"
                                         className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col">
                                    
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">
                                            <img src="http://thirdqq.qlogo.cn/g?b=oidb&k=pCoBdF4gPstfUibfvBXd3Dg&s=100&t=1556578912"
                                                 width={40}
                                                 height={40}
                                                 alt=""/>
                                            <small className="text-muted">
                                                书写于2020-10-17
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>*/}
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
                    <div className="col-lg-6">
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
