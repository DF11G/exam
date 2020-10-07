import React, { Component, Fragment } from 'react'
import "antd/dist/antd.css";
import { Menu } from 'antd';
import { withRouter } from "react-router-dom";
import { UserAddOutlined, FileAddOutlined, IdcardOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class LoginMenu extends Component {
    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleGetPaper = this.handleGetPaper.bind(this)
    }

    state = {
        current: 'mail',
    };

    handleLogin() {
        this.props.history.push('/')
    };

    handleRegister() {
        this.props.history.push('/register')
    }

    handleGetPaper() {
        this.props.history.push('/getPaper')
    }

    render() {
        const { current } = this.state;
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
            >
                <Menu.Item onClick={this.handleLogin} key="logout" icon={<IdcardOutlined />}>
                    登出
                </Menu.Item>
                <Menu.Item onClick={this.handleGetPaper} key="getPaper" icon={<FileAddOutlined />}>
                    获取试卷
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter(LoginMenu)