import TabBar from '../components/tabbar'
// @ts-ignore

export default function Mood() {
    function handleChange(e:number){
        console.log(e)
    }
    return (
        <main className="container">
            <style jsx>{`
                .row >div {
                   margin-bottom: 20px;
                }
            `}</style>
            <TabBar handleChange={handleChange}>
                <div className={`row`}>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <img src="https://cn.bing.com/th?id=OHR.OtterCliff_ZH-CN3062794263_1920x1080.jpg"
                                         className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a
                                            natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins
                                            ago</small></p>
                                    </div>
                                </div>
                            </div>
                           {/* <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>*/}
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
