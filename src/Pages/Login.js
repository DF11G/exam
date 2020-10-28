import React, { Component } from 'react'
import "antd/dist/antd.css"
import { Input } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Axios from 'axios'
import './Login.css'


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handleInputPassword = this.handleInputPassword.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUserNameChange(e) {
        this.setState({
            userName: e.target.value
        })
    }

    handleInputPassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleLogin() {
        console.log('登录')
    }

    render() {
        return (
            <div id="content_1">
                <div className="login-header">
                    欢迎登录试卷系统
                </div>
                <form>
                    <div className="login-input-box">
                        <span className="icon icon-user"></span>
                        <input
                            type="text"
                            placeholder="输入用户名"
                            value={this.state.userName}
                            onChange={this.handleUserNameChange}
                        />
                    </div>
                    <div className="login-input-box">
                        <span className="icon icon-password"></span>
                        <input
                            value={this.state.password}
                            type="password"
                            placeholder="输入密码"
                            onChange={this.handleInputPassword}
                        />
                    </div>
                </form>
                <div className="login-button-box">
                    <button>登录</button>
                </div>
                <div className="logon-box">
                    <a href="">忘记密码</a>
                    <a href="">注册</a>
                </div>
            </div>
        )
    }
}

export default Login
