import React, { Component } from 'react'
import "antd/dist/antd.css"
import ReactDOM from 'react-dom'
import LogoutMenu from './Components/LogoutMenu'
import LoginMenu from './Components/LoginMenu'
import InputPassword from './Components/InputPassword'
import GetPaper from './Components/GetPaper'
import { BrowserRouter, Route } from 'react-router-dom'
import Register from './Components/Register'
import './Page.css'
import { Layout, Breadcrumb } from 'antd'

const { Header, Content, Footer } = Layout;

class StuLogin extends Component {

    render() {
        return (
            <Layout className="layout">
                <BrowserRouter>
                    <div>
                        <Header>
                            <Route
                                path='/' exact component={LogoutMenu}
                            ></Route>
                            <Route
                                path='/login' exact component={LoginMenu}
                            ></Route>
                            <Route
                                path='/register' exact component={LogoutMenu}
                            ></Route>
                            <Route
                                path='/getPaper' exact component={LoginMenu}
                            ></Route>
                        </Header>
                        <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>

                            </Breadcrumb>
                            <div className="site-layout-content">
                                <Route
                                    path='/' exact component={InputPassword}
                                ></Route>

                                <Route
                                    path='/register' exact component={Register}
                                ></Route>

                                <Route
                                    path='/getPaper' exact component={GetPaper}
                                ></Route>
                            </div>
                        </Content>
                    </div>
                </BrowserRouter>
                <Footer style={{ textAlign: 'center' }}>2020@bjfu</Footer>
            </Layout>
        )
    }
}

export default StuLogin