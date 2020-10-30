import React, { Component } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import ChangePassword from './Components/ChangePassword'
import { BrowserRouter, Route } from 'react-router-dom'
import { withRouter } from "react-router-dom"


class Font extends Component {
    render() {
        return (

            <div>
                <Route
                    path='/' exact component={Login}
                ></Route>
                <Route
                    path='/register' component={Register}
                ></Route>
                <Route
                    path='/changePassword' component={ChangePassword}
                ></Route>
            </div>

        )
    }
}

export default withRouter(Font)