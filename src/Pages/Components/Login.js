//登录组件
import React, { Component } from 'react'
import "antd/dist/antd.css"
import { Input } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Axios from 'axios'
import { handleGetUserInfAction } from './Store/ActionCreators'
import store from './Store/Index'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleLogin = this.handleLogin.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputPassword = this.handleInputPassword.bind(this)
    }
    handleInputChange(e) {
        this.setState({
            userName: e.target.value
        })
    }
    handleInputPassword(e) {
        this.setState({
            userPassword: e.target.value
        })
    }
    // 登录请求
    handleLogin() {
        Axios.post('/exam/user/loginCheck', {
            "account": this.state.userName,
            "password": this.state.userPassword
        }).then((res) => {
            console.log(res)
            console.log(this.state.userName, res.data.object.type)
            if (res.data.code === 1) {
                const action = handleGetUserInfAction(this.state.userName, res.data.object.type)
                store.dispatch(action) 
                if (this.state.historyURL === '/' || this.state.historyURL === '/register') {
                    this.props.history.push('/login')
                } else {
                    this.props.history.push(this.state.historyURL)
                }
            } else {
                alert('登陆失败')
            }
        }).catch(() => {
            alert('请求错误')
        })
    }
    // 渲染
    render() {
        return (
            <div className="inputPassword">
                {/* 用户名输入 */}
                <Input
                    value={this.state.userName}
                    placeholder="输入用户名"
                    onChange={this.handleInputChange}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                />
                {/* 密码输入 */}
                <Input.Password
                    value={this.state.userPassword}
                    placeholder="输入密码"
                    onChange={this.handleInputPassword}
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

export default Login