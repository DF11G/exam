import React, { Component } from 'react'
import { Button, Input, Radio } from 'antd'
import { KeyOutlined, UserOutlined } from '@ant-design/icons'
import { handleDeleteRegisterInf } from './Store/ActionCreators'
import "antd/dist/antd.css"
import store from './Store/Index'
import Axios from 'axios'

class Register extends Component {
    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
        this.state = store.getState()
        this.handleInputChangeName = this.handleInputChangeName.bind(this)
        this.handleInputChangePassword = this.handleInputChangePassword.bind(this)
        this.handleChoose = this.handleChoose.bind(this)
    }

    handleRegister() {
        Axios.put('/exam/user/register', {
            account: this.state.registerName,
            password: this.state.registerPassword,
            type: this.state.registerType,
            name: "name"   
        }).then((res) => {
            console.log(res)
            console.log(this.state.registerName)
            console.log(this.state.registerPassword)
            if (res.data.code === 0) {
                alert('注册成功')
                const action = handleDeleteRegisterInf()
                store.dispatch(action)
            } else if (res.code === 3) {
                alert('账号重复')
            } else if (res.code === 1) {
                alert('参数错误')
            }
        }).catch(() => {
            alert('请求错误')
        })

    }
    handleInputChangeName(e) {
        this.setState({
            registerName: e.target.value
        })
    }
    handleInputChangePassword(e) {
        this.setState({
            registerPassword: e.target.value
        })
    }
    handleChoose(e) {
        this.setState({
            registerType: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Input
                    placeholder="输入用户名"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    value={this.state.registerName}
                    onChange={this.handleInputChangeName}
                />
                <Input.Password
                    placeholder="输入密码"
                    prefix={<KeyOutlined />}
                    value={this.state.registerPassword}
                    onChange={this.handleInputChangePassword}
                />
                <Radio.Group
                    buttonStyle="solid"
                    onChange={this.handleChoose}
                >
                    <Radio.Button value="1">教师</Radio.Button>
                    <Radio.Button value="2">学生</Radio.Button>
                </Radio.Group>
                <Button
                    onClick={this.handleRegister}
                >
                    确定
                </Button>
            </div>
        )
    }
}
export default Register