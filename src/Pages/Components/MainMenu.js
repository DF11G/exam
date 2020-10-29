import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Menu } from 'antd';
import { withRouter } from "react-router-dom";
import { FileAddOutlined, IdcardOutlined, UserOutlined, UserAddOutlined, HistoryOutlined } from '@ant-design/icons';
import store from './Store/Index'
import { handleUserLogout } from './Store/ActionCreators'

class MainMenu extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleLogout = this.handleLogout.bind(this)
        this.handleGetPaper = this.handleGetPaper.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleSetPaper = this.handleSetPaper.bind(this)
        this.handleGetMyPaper = this.handleGetMyPaper.bind(this)
        store.subscribe(this.handleStoreChange)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    handleLogout() { // 登出 转换登录状态
        this.props.history.push('/')
        const action = handleUserLogout()
        store.dispatch(action)
    };

    handleGetPaper() { // 获取试卷界面
        this.props.history.push('/main/getPaper')
    }

    handleSetPaper() { // 创建试卷页面
        this.props.history.push('/main/setPaper')
    }

    handleGetMyPaper() { // 查找自己创建的试卷
        this.props.history.push('./main/setMyPaper')
    }

    render() {

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
    }
}

export default withRouter(MainMenu)