import React, { Component } from 'react'
import "antd/dist/antd.css";
import { combineReducers } from 'redux';
import store from './Store/Index'

class GetMyPapers extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }
    render() {
        return
    }
}

export default GetMyPapers