import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Input, Button } from 'antd';
import store from './Store/Index'
import Axios from 'axios'
import { handleChangePassword } from './Store/ActionCreators'

class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleInputOldPassword = this.handleInputOldPassword.bind(this)
        this.handleInputNewPassword = this.handleInputNewPassword.bind(this)
        this.handleInputNewPasswordAgain = this.handleInputNewPasswordAgain.bind(this)
    }

    handleChangePassword() {
        if (this.state.newPassword === this.state.newPasswordAgain) {
            Axios.post('exam/user/changePassword', {
                account: this.state.userName,
                oldPassword: this.state.oldPassword,
                newPassword: this.state.newPassword
            }).then((res) => {
                console.log(res)
                if (res.data.code === 1) {
                    const action = handleChangePassword()
                    store.dispatch(action)
                    alert('修改成功')
                } else if (res.data.code === 7) {
                    alert('修改失败,密码输入错误')
                } else if (res.data.code === 2) {
                    alert('参数错误')
                } else {
                    alert('其他错误')
                }
            })
        } else {
            alert('两次输入密码不一致')
        }
    }

    handleInputOldPassword(e) {
        this.setState({
            oldPassword: e.target.value
        })
    }
    handleInputNewPassword(e) {
        this.setState({
            newPassword: e.target.value
        })
    }
    handleInputNewPasswordAgain(e) {
        this.setState({
            newPasswordAgain: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Input.Password
                    placeholder="输入旧密码"
                    value={this.state.oldPassword}
                    onChange={this.handleInputOldPassword}
                />
                <Input.Password
                    placeholder="输入新密码"
                    value={this.state.newPassword}
                    onChange={this.handleInputNewPassword}
                />
                <Input.Password
                    placeholder="再次输入新密码"
                    value={this.state.newPasswordAgain}
                    onChange={this.handleInputNewPasswordAgain}
                />
                <Button
                    onClick={this.handleChangePassword}
                >
                    提交修改
                </Button>
            </div>
        )
    }
}
export default ChangePassword