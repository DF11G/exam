import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './Pages/Page'

import Login from './Pages/Components/Index/Login'
import Register from './Pages/Components/Index/Register'
import ChangePassword from './Pages/Components/Index/ChangePassword'
import CreatePaper from './Pages/Components/paper/CreatePaper'
import Test from './Pages/Components/paper/PapersList'


class BasicRoute extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Page>
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
                        <Route
                            path='/test' component={Test}
                        ></Route>
                    </Page>
                </Switch>
            </BrowserRouter>
        )
    }
}


export default BasicRoute;