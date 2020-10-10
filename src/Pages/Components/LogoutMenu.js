import React, { Component, Fragment } from 'react'
import "antd/dist/antd.css";
import { Menu } from 'antd';
import { withRouter } from "react-router-dom";
import { UserAddOutlined,  IdcardOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class LogoutMenu extends Component {
    constructor(props) {
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
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

    render() {
        const { current } = this.state;
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                history={this.props.history}
            >
                <Menu.Item onClick={this.handleLogin} key="login" icon={<IdcardOutlined />}>
                    登录
                </Menu.Item>
                <Menu.Item onClick={this.handleRegister} key="register" icon={<UserAddOutlined />}>
                    注册
                </Menu.Item>
            </Menu>
        );
    }
}

export default withRouter(LogoutMenu)