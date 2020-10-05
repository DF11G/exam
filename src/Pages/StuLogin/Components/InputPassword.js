import React, { Component, Fragment } from 'react'
import "antd/dist/antd.css"
import { Input, Tooltip } from 'antd'
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Axios from 'axios'

class InputPassword extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        Axios.get('/test.json').then((res) => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <Fragment>
                <Input
                    placeholder="输入用户名"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                />
                <Input.Password
                    placeholder="输入密码"
                    prefix={<UserOutlined className="KeyOutlined" />}
                />
                <Button onClick={this.handleClick}>登录</Button>
                <Button >注册</Button>
            </Fragment>
        )
    }
}

export default InputPassword