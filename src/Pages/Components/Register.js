import React, { Component } from 'react'
import "antd/dist/antd.css"
import { Input, Radio } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button } from 'antd'
import Axios from 'axios'
import './Login.css'
import { withRouter } from "react-router-dom"



class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userTrueName: '',
            password: '',
            passwordTwice: '',
            userType: 1
        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.handleInputPassword = this.handleInputPassword.bind(this)
        this.handleInputPasswordTwice = this.handleInputPasswordTwice.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleuserTrueNameChange = this.handleuserTrueNameChange.bind(this)
        this.handleUserTypeChange = this.handleUserTypeChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleUserNameChange(e) {
        this.setState({
            userName: e.target.value
        })
    }

    handleuserTrueNameChange(e) {
        this.setState({
            userTrueName: e.target.value
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

    handleUserTypeChange(e) {
        console.log(this.state.userType)
        this.setState({
            userType: e.target.value
        })
    }

    handleLogin() {
        this.props.history.push('./')
    }

    handleRegister() {
        if (this.state.password === this.state.passwordTwice) {
            Axios.put('/exam/user/register', {
                account: this.state.userName,
                password: this.state.password,
                name: this.state.userTrueName,
                type: this.state.userType
            }).then((res) => {
                if (res.data.code === 1) {
                    this.props.history.push('/main')
                    alert('注册成功')
                } else if (res.code === 4) {
                    alert('账号重复')
                } else {
                    alert('请求错误')
                }
            }).catch(() => {
                alert('服务器错误')
            })
        } else {
            alert('两次输入密码不一致')
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
                        <span class="icon icon-user"></span>
                        <Input
                            size="large"
                            type="text"
                            placeholder="输入真实姓名"
                            value={this.state.userTrueName}
                            onChange={this.handleuserTrueNameChange}
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
                    <div>
                        <span class="icon icon-password"></span>
                        <Radio.Group
                            onChange={this.handleUserTypeChange}
                            value={this.state.userType}
                        >
                            <Radio value={1}>教师</Radio>
                            <Radio value={2}>学生</Radio>
                        </Radio.Group>
                    </div>
                </form>
                <div class="login-button-box">
                    <button
                        onClick={this.handleRegister}
                        history={this.props.history}
                    >注册</button>
                </div>
                <div class="logon-box">
                    <Button
                        type="primary"
                        onClick={this.handleLogin}
                        history={this.props.history}
                    >返回登录</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(Register)
