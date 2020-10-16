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
            <Sider
                width={200}
                className="site-layout-background"
            >
                <List
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                        </List.Item>
                    )}
                />
            </Sider>
        )
    }
}

export default PaperMenu