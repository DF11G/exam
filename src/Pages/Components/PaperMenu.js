import React, { Component } from 'react'
import "antd/dist/antd.css"
import { Layout, Menu, List, Typography } from 'antd'
import { UserOutlined } from '@ant-design/icons';

const { Sider } = Layout
const { SubMenu } = Menu
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
]


class PaperMenu extends Component {
    render() {
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="1">option1</Menu.Item>
                    <Menu.Item key="2">option2</Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<UserOutlined />} title="subnav 2">
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<UserOutlined />} title="subnav 3">
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }

    // render() {
    //     return (
    //         <Sider
    //             width={200}
    //             className="site-layout-background"
    //         >
    //             <List
    //                 header={<div>Header</div>}
    //                 footer={<div>Footer</div>}
    //                 bordered
    //                 dataSource={data}
    //                 renderItem={item => (
    //                     <List.Item>
    //                         <Typography.Text mark>[ITEM]</Typography.Text> {item}
    //                     </List.Item>
    //                 )}
    //             />
    //         </Sider>
    //     )
    // }
}

export default PaperMenu