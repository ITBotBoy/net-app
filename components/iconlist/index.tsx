import {Space} from "antd";
import React from "react";
const Icons=require("@ant-design/icons");
// @ts-ignore
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
// @ts-ignore
export default function Index({icons}){
    return (
        // @ts-ignore
        icons.map((item,index)=>{
            return (
                <IconText icon={Icons[item.icon]} text={item.text} key={item.icon} />
            )
        })
    )
}
