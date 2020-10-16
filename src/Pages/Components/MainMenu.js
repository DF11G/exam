import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Menu } from 'antd';
import { withRouter } from "react-router-dom";
import { FileAddOutlined, IdcardOutlined, UserOutlined, UserAddOutlined, HistoryOutlined } from '@ant-design/icons';
import store from './Store/Index'
import { handleUserLogout, handleHistoryURL } from './Store/ActionCreators'

class MainMenu extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleRegister = this.handleRegister.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
        this.handleGetPaper = this.handleGetPaper.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSetPaper = this.handleSetPaper.bind(this)
        this.handleGetMyPaper = this.handleGetMyPaper.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleLogin() { // 登录页面
        const action = handleHistoryURL(this.props.location.pathname)
        store.dispatch(action)
        this.props.history.push('/')
    };

    handleLogout() { // 登出 转换登录状态
        this.props.history.push('/')
        const action = handleUserLogout()
        store.dispatch(action)
    };

    handleRegister() { // 注册界面
        this.props.history.push('/register')
    }

    handleGetPaper() { // 获取试卷界面
        this.props.history.push('/getPaper')
    }

    handleSetPaper() { // 创建试卷页面
        this.props.history.push('/setPaper')
    }

    handleGetMyPaper() { // 查找自己创建的试卷
        this.props.history.push('setMyPaper')
    }

    handleChangePassword() {
        this.props.history.push('./changePassword')
    }

    render() {
        if (this.state.pageState === 1) {
            if (this.state.userType === 1) { //教师
                return (
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item
                            onClick={this.handleLogout}
                            key="logout"
                            icon={<IdcardOutlined />}
                        >
                            登出
                        </Menu.Item>
                        <Menu.Item
                            onClick={this.handleSetPaper}
                            key="getPaper"
                            icon={<FileAddOutlined />}
                        >
                            创建试卷
                        </Menu.Item>
                        <Menu.Item
                            onClick={this.handleGetMyPaper}
                            key="getMyPaper"
                            icon={<FileAddOutlined />}
                        >
                            获取我创建的试卷
                        </Menu.Item>
                        <Menu.Item
                            onClick={this.handleChangePassword}
                            key="userInf"
                            icon={<HistoryOutlined />}
                        >
                            {this.state.userName}
                        </Menu.Item>
                    </Menu>
                )

            } else if (this.state.userType === 2) {//学生
                return (
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                    >
                        <Menu.Item
                            onClick={this.handleLogout}
                            key="logout"
                            icon={<IdcardOutlined />}
                        >
                            登出
                        </Menu.Item>
                        <Menu.Item
                            onClick={this.handleGetPaper}
                            key="getPaper"
                            icon={<FileAddOutlined />}
                        >
                            获取试卷
                        </Menu.Item>
                        <Menu.Item
                            onClick={this.handleChangePassword}
                            key="userInf"
                            icon={<UserOutlined />}
                        >
                            {this.state.userName}
                        </Menu.Item>
                    </Menu>
                )
            }

        } else if (this.state.pageState === 0) {
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
            )
        }

    }
}

export default withRouter(MainMenu)