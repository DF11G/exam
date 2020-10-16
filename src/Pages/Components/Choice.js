import React, { Component } from 'react'
import "antd/dist/antd.css"
import store from './Store/Index'

class Choice extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
    }
    
    render() {
        return (
            <div>
                这是选择题。
            </div>
        )
    }
}

export default Choice