import React, { Component, Fragment } from 'react'
import { Button, Menu, Input, Dropdown } from 'antd'
import { KeyOutlined, UserOutlined, DownOutlined } from '@ant-design/icons'
import "antd/dist/antd.css"

const menu = (
    <Menu>
        <Menu.Item key="1">教室</Menu.Item>
        <Menu.Item key="2">学生</Menu.Item>
        <Menu.Item key="3">管理员</Menu.Item>
    </Menu>
);

class Register extends Component {
    render() {
        return (
            <div>
                <Input
                    placeholder="输入用户名"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                />
                <Input.Password
                    placeholder="输入密码"
                    prefix={<KeyOutlined />}
                />

                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        选择用户类型 <DownOutlined />
                    </a>
                </Dropdown>
                <Button>确定</Button>
            </div>
        )
    }
}
export default Register