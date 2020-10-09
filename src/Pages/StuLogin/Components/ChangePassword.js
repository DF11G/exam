import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Input, Button } from 'antd';

class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }
    render() {
        return (
            <div>
                <Input.Password placeholder="输入旧密码" />
                <Input.Password placeholder="输入新密码" />
                <Input.Password placeholder="再次输入新密码" />
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