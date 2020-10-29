import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Input } from 'antd';
import { withRouter } from "react-router-dom";
const { Search } = Input;

class GetPaper extends Component {
    constructor(props) {
        super(props)
        this.handleGetPaper = this.handleGetPaper.bind(this)
    }
    handleGetPaper() {
        this.props.history.push('./main/paper')
    }
    render() {
        return (
            <Search
                placeholder="输入试卷编号"
                enterButton="获取试卷"
                size="large"
                onSearch={this.handleGetPaper}
                history={this.props.history}
            />
        )
    }
}

export default withRouter(GetPaper)