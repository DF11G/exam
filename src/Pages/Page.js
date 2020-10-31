import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { Layout, Menu, PageHeader } from 'antd';
import "antd/dist/antd.css"

import Login from './Components/Index/Login'
import Register from './Components/Index/Register'
import ChangePassword from './Components/Index/ChangePassword'
import UserInfoMenu from './Components/userInfo/UserInfoMenu'
import CreatePaper from './Components/paper/CreatePaper'

import './Page.css'

const { Header, Content, Footer } = Layout;

class Page extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Layout className="layout">
                        <Header>
                            <div className="logo" />
                            <div className="page-menu">
                                <UserInfoMenu></UserInfoMenu>
                            </div>
                        </Header>
                        <Content style={{ padding: '0 50px' }}>
                            <div>
                                <Switch>
                                    <Route
                                        path='/login' component={Login}
                                    ></Route>
                                    <Route
                                        path='/register' component={Register}
                                    ></Route>
                                    <Route
                                        path='/changePassword' component={ChangePassword}
                                    ></Route>
                                    <Route
                                        path='/createPaper' component={CreatePaper}
                                    ></Route>
                                    <Redirect exact to="/login" from='/' />
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </div>
            </BrowserRouter>
        )
    }
}

export default Page