import React, { Component } from 'react'
import Main from './Main'
import Login from './Login'
import Register from './Register'
import ChangePassword from './ChangePassword'
import { BrowserRouter, Route } from 'react-router-dom'

class Page extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route
                        path='/' exact component={Login}
                    ></Route>
                    <Route
                        path='/register' exact component={Register}
                    ></Route>
                    <Route
                        path='/changePassword' exact component={ChangePassword}
                    ></Route>
                    <Route
                        path='/main' exact component={Main}
                    ></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default Page