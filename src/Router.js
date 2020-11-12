import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Page from './Pages/Page'

import Login from './Pages/Components/Index/Login'
import Register from './Pages/Components/Index/Register'
import ChangePassword from './Pages/Components/Index/ChangePassword'

import CreatePaper from './Pages/Components/paper/CreatePaper'
import PapersList from './Pages/Components/paper/PapersList'
import EditProblem from './Pages/Components/paper/EditProblem'
import SearchPaper from './Pages/Components/paper/SearchPaper'
import AnswerPaper from './Pages/Components/answer/AnswerPaper'
import AnswerProblem from './Pages/Components/answer/AnswerProblem'
import PaperAnswerList from './Pages/Components/answer/PaperAnswerList'


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
                            path='/papersList' component={PapersList}
                        ></Route>
                        <Route
                            path='/editProblem' component={EditProblem}
                        ></Route>
                        <Route
                            path='/searchPaper' component={SearchPaper}
                        ></Route>
                        <Route
                            path='/answerPaper' component={AnswerPaper}
                        ></Route>
                        <Route 
                            path='/answerProblem' component={AnswerProblem}
                        ></Route>
                        <Route
                            path='/paperAnswerList' component={PaperAnswerList}
                        ></Route>
                    </Page>
                </Switch>
            </BrowserRouter>
        )
    }
}


export default BasicRoute;