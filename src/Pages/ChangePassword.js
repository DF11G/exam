import React, { Component } from 'react'
import "antd/dist/antd.css"
import { Input } from 'antd'
import { UserOutlined, KeyOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Axios from 'axios'
import './Login.css'


class ChangePassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            oldPassword: '',
            password: '',
            passwordTwice: ''
        }
        this.handleInputUserName = this.handleInputUserName.bind(this)
        this.handleInputOldPassword = this.handleInputOldPassword.bind(this)
        this.handleInputPassword = this.handleInputPassword.bind(this)
        this.handleInputpasswordTwice = this.handleInputpasswordTwice.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)

    }

    handleInputUserName(e) {
        this.setState({
            userName: e.target.value
        })
    }

    handleInputOldPassword(e) {
        this.setState({
            oldPassword: e.target.value
        })
    }

    handleInputPassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleInputpasswordTwice(e) {
        this.setState({
            passwordTwice: e.target.value
        })
    }

    handleChangePassword() {
        if (this.state.password != this.state.passwordTwice) {
            alert('两次输入的新密码不一致')
        } else {
            Axios.post('/exam/user/changePassword', {
                account: this.state.userName,
                oldPassword: this.state.oldPassword,
                newPassword: this.state.password
            }).then((res) => {
                if (res.data.code === 1) {
                    this.props.history.push('/')
                    alert('修改成功')
                } else if (res.code === 7) {
                    alert('账号不存在或密码错误')
                } else {
                    console.log(res)
                    alert('请求错误')
                }
            }).catch(() => {
                alert('服务器错误')
            })
        }
    }

    render() {
        return (
            <div id="content_2">
                <div class="login-header">
                    修改用户密码
                </div>
                <form>
                    <div className="login-input-box">
                        <span className="icon icon-user"></span>
                        <input
                            type="text"
                            placeholder="输入用户名"
                            value={this.state.userName}
                            onChange={this.handleInputUserName}
                        />
                    </div>
                    <div class="login-input-box">
                        <span class="icon icon-password"></span>
                        <input
                            type="password"
                            placeholder="输入您当前的密码"
                            value={this.state.oldPassword}
                            onChange={this.handleInputOldPassword}
                        />
                    </div>
                    <div class="login-input-box">
                        <span class="icon icon-password"></span>
                        <input
                            value={this.state.password}
                            type="password"
                            placeholder="输入您想修改的密码"
                            onChange={this.handleInputPassword}
                        />
                    </div>
                    <div class="login-input-box">
                        <span class="icon icon-password"></span>
                        <input
                            value={this.state.passwordTwice}
                            type="password"
                            placeholder="再次输入您想修改的密码"
                            onChange={this.handleInputpasswordTwice}
                        />
                    </div>
                </form>
                <div class="login-button-box">
                    <button
                        onClick={this.handleChangePassword}
                        history={this.props.history}
                    >修改密码</button>
                </div>
                <div class="logon-box">
                    <a href="">返回登录</a>
                </div>
            </div>
        )
    }
}

export default ChangePassword
