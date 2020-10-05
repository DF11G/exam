import React, { Component } from 'react'
import "antd/dist/antd.css";
import LoginMenu from './Components/LoginMenu'
import InputPassword from './Components/InputPassword'
import { BrowserRouter, Route } from 'react-router-dom'
import Register from './Components/Register'


class StuLogin extends Component {
    render() {
        return (
            <div>
                <LoginMenu />

                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={InputPassword}></Route>
                        <Route path='/register' exact component={Register}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default StuLogin