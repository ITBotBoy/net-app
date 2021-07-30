import TabBar from '../components/tabbar'
// @ts-ignore
import IconList from '../components/iconlist'
// @ts-ignore
const iconData=[
    {icon:'LikeOutlined',text:'2'},
    {icon:'MessageOutlined',text:'3'},
]
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
                                <div className="card-footer bg-transparent linkItem">
                                    <div className="card-text">
                                        <img src="https://wx.qlogo.cn/mmopen/vi_32/1EZDxInTevwLUI8uIG8hBUB4p3jODAdRniaYY13XOfTnMGkL36y6KxkBd1cJfyd0rTERnj85R9fnNgu802Kjzlw/132"
                                             className="round30 mr8" alt="..."/>
                                        <small> 发布于 2019-04-02</small>
                                    </div>
                                    <div className='iconFooter'>
                                        <IconList icons={iconData}/>
                                    </div>
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
