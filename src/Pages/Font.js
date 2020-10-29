import React, { Component } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import ChangePassword from './Components/ChangePassword'
import { BrowserRouter, Route } from 'react-router-dom'

class Font extends Component {
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
                </div>
            </BrowserRouter>
        )
    }
}

export default Font