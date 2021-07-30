import { Tabs} from 'antd';
import { useState, useEffect } from 'react';
const { TabPane } = Tabs;
//一级分类
//组件组合
// @ts-ignore
export default function Index(props) {
    const [tabPosition,setTabPosition]=useState('left')
    const [activeKey,setActiveKey]=useState(0)
    const [width,setWidth]=useState(1200)
    // @ts-ignore
    function handleChange(e){
        props.handleChange(Number(e))
    }
    // @ts-ignore
    function handleResize(e){
        setWidth(e.target.innerWidth)
    }
    useEffect(()=>{
        setWidth(window.outerWidth)
        window.addEventListener('resize', handleResize)
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    },[])
    useEffect(()=>{
        if(width<768){
            setTabPosition('top')
        }else {
            setTabPosition('left')
        }
    },[width])
    // @ts-ignore
    return (
        <div className="navWrap">
            <div className={`row`}>
                <div className="col-auto">
                    <style jsx global>{`
                        .ant-tabs-content {
                            display: none!important;
                        }
                    `}</style>
                    <Tabs tabPosition={tabPosition}  defaultActiveKey={activeKey} onChange={handleChange}>
                        <TabPane tab="全部" key={0}>
                        </TabPane>
                        <TabPane tab="常用工具" key={2}>
                        </TabPane>
                        <TabPane tab="生活工具" key={3}>
                        </TabPane>
                    </Tabs>
                </div>
                <div className={`${tabPosition==='top'?'col-auto':'col'} slotWrap`}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
