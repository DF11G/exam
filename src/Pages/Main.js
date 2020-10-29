import React, { Component } from 'react'
import "antd/dist/antd.css"
// import LogoutMenu from './Components/LogoutMenu'
import MainMenu from './Components/MainMenu'
import GetPaper from './Components/GetPaper'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import SetPaper from './Components/SetPaper'
import EditPaper from './Components/EditPaper'
import './Main.css'
import { Layout, Breadcrumb } from 'antd'


const { Header, Content, Footer } = Layout;

class Main extends Component {

	render() {
		return (
			<Layout className="layout">
				
					<div>
						<Header>
							<Route
								path='/main' component={MainMenu}
							></Route>
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
											path='/main/getPaper' component={GetPaper}
										></Route>
										<Route
											path='/main/setPaper' component={SetPaper}
										></Route>
										<Route
											path='/main/editPaper' component={EditPaper}
										></Route>
									</div>
								</Content>
							</Layout>
						</Layout>
						<Footer style={{ textAlign: 'center' }}>2020@bjfu</Footer>
					</div>
				
			</Layout>
		)
	}
}

export default withRouter(Main)