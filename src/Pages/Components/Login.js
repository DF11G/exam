import React, { Component } from 'react'
import "antd/dist/antd.css"
import Axios from 'axios'
import './Login.css'
import store from './Store/Index'
import { handleGetUserInfAction } from './Store/ActionCreators'
import { Button } from 'antd'
import { withRouter } from "react-router-dom";



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
        this.handleChangePassword = this.handleChangePassword.bind(this)
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

    handleChangePassword() {
        this.props.history.push('./changePassword')
    }

    handleRegister() {
        this.props.history.push('./register')
    }

    handleLogin() {
        Axios.post('/exam/user/loginCheck', {
            "account": this.state.userName,
            "password": this.state.password
        }).then((res) => {
            console.log(res)
            if (res.data.code === 1) {
                const action = handleGetUserInfAction(res.data.object.name, res.data.code)
                store.dispatch(action)
                alert('登陆成功')
                this.props.history.push('/main')
            } else if (res.data.code === 3) {
                alert('账户名密码错误')
            } else {
                alert('请求错误')
            }
        }).catch(() => {
            alert('服务器错误')
        })
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
                    <button
                        onClick={this.handleLogin}
                        history={this.props.history}
                    >登录</button>
                </div>
                <div className="logon-box">
                    <Button
                        type="primary"
                        onClick={this.handleChangePassword}
                        
                    >修改密码</Button>
                    <Button
                        type="primary"
                        onClick={this.handleRegister}
                        
                    >注册</Button>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)
