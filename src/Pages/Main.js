import React, { Component } from 'react'
import "antd/dist/antd.css"
// import LogoutMenu from './Components/LogoutMenu'
import MainMenu from './Components/MainMenu'
import PaperMenu from './Components/PaperMenu'
import Login from './Components/Login'
import GetPaper from './Components/GetPaper'
import changePassword from './Components/ChangePassword'
import { BrowserRouter, Route } from 'react-router-dom'
import Register from './Components/Register'
import SetPaper from './Components/SetPaper'
import EditPaper from './Components/EditPaper'
import './Main.css'
import { Layout, Breadcrumb } from 'antd'


const { Header, Content, Footer } = Layout;

class StuLogin extends Component {

	render() {
		return (
			<Layout className="layout">
				<BrowserRouter>
					<div>
						<Header>
							<MainMenu />
						</Header>
						<Layout>
							<Layout style={{ padding: '0 24px 24px' }}>
								<Breadcrumb style={{ margin: '16px 0' }}>
								</Breadcrumb>
								<Content
									className="site-layout-background"
									style={{
										padding: 24,
										margin: 0,
										minHeight: 280,
									}}
								>
									<div className="site-layout-content">
										<Route
											path='/' exact component={Login}
										></Route>
										<Route
											path='/register' exact component={Register}
										></Route>
										<Route
											path='/getPaper' exact component={GetPaper}
										></Route>
										<Route
											path='/changePassword' exact component={changePassword}
										></Route>
										<Route
											path='/setPaper' exact component={SetPaper}
										></Route>
										<Route
											path='/editPaper' exact component={EditPaper}
										></Route>
									</div>
								</Content>
							</Layout>
						</Layout>
						<Footer style={{ textAlign: 'center' }}>2020@bjfu</Footer>
					</div>
				</BrowserRouter>
			</Layout>
		)
	}
}

export default StuLogin