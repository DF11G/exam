import React, { Component } from 'react'
import Main from './Main'
import { BrowserRouter, Route } from 'react-router-dom'
import Font from './Font'

class Page extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route
                        path='/' exact component={Font}
                    ></Route>
                    <Route
                        path='/main' component={Main}
                    ></Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default Page