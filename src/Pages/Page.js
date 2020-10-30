import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import { Layout, Menu, Breadcrumb } from 'antd';
import "antd/dist/antd.css"

import Login from './Components/Index/Login'
import Register from './Components/Index/Register'
import ChangePassword from './Components/Index/ChangePassword'

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
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                        </Header>
                        <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item><a href="register">Home</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="register">List</a></Breadcrumb.Item>
                            <Breadcrumb.Item><a href="register">App</a></Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content">
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