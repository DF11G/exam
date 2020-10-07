//登录组件
import React, { Component, Fragment } from 'react'
import "antd/dist/antd.css"
import { Input, Tooltip } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Axios from 'axios'

class InputPassword extends Component {
    constructor(props) {
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
        const userName = ''
        const password = ''
    }
    // 登录
    handleLogin() {
        // Axios.post('/user/loginCheck', {
        //     account: this.userName,
        //     password: this.Password
        // }).then(() => {
        //     console.log('请求成功')
        // }).catch(() => {
        //     alert('请求错误')
        // })
        Axios.get('./test.json').then((res) => {
            if (res.data[0] === 0) {
                this.props.history.push('/login')
            } else {
                alert('登陆失败')
            }
        })
    }
    // handleClick() {
    //     Axios.get('/test.json').then((res) => {
    //         console.log(res.data)
    //     })
    // }
    render() {
        return (
            <div className="inputPassword">
                {/* 用户名输入 */}
                <Input
                    value={this.userName}
                    placeholder="输入用户名"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                />
                {/* 密码输入 */}
                <Input.Password
                    
                    value={this.password}
                    placeholder="输入密码"
                    prefix={<KeyOutlined />}
                />
                {/* 登录按钮 */}
                <Button
                    onClick={this.handleLogin}
                    history={this.props.history}
                >
                    登录
                </Button>
            </div >
        )
    }
}

export default InputPassword