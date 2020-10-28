import React, { Component } from 'react'
import "antd/dist/antd.css"
import { Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button } from 'antd'
import Axios from 'axios'
import './Login.css'


class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            passwordTwice: ''
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handleInputPassword = this.handleInputPassword.bind(this)
        this.handleInputPasswordTwice = this.handleInputPasswordTwice.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
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

    handleInputPasswordTwice(e) {
        this.setState({
            passwordTwice: e.target.value
        })
    }

    handleRegister() {
        if (this.state.password != this.state.passwordTwice) {
            alert('两次输入的密码不一致')
        } else {
            console.log('注册')
        }
    }

    render() {
        return (
            <div id="content_2">
                <div class="login-header">
                    注册您的用户
                </div>
                <form>
                    <div class="login-input-box">
                        <span class="icon icon-user"></span>
                        <Input
                            size="large"
                            type="text"
                            placeholder="输入用户名"
                            value={this.state.userName}
                            onChange={this.handleUserNameChange}
                        />
                    </div>
                    <div class="login-input-box">
                        <span class="icon icon-password"></span>
                        <Input.Password
                            size="small"
                            value={this.state.password}
                            type="password"
                            placeholder="输入密码"
                            onChange={this.handleInputPassword}
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>
                    <div class="login-input-box">
                        <span class="icon icon-password"></span>
                        <Input.Password
                            size="small"
                            value={this.state.passwordTwice}
                            type="password"
                            placeholder="请再次输入密码"
                            onChange={this.handleInputPasswordTwice}
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </div>
                </form>
                <div class="login-button-box">
                    <button
                        onClick={this.handleRegister}
                    >注册</button>
                </div>
                <div class="logon-box">
                    <a href="">返回登录</a>
                </div>
            </div>
        )
    }
}

export default Register
