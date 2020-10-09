import React, { Component } from 'react'
import "antd/dist/antd.css";
import { Input } from 'antd';
const { Search } = Input;

class GetPaper extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <Search
                placeholder="输入试卷编号"
                enterButton="获取试卷"
                size="large"
                onSearch={value => console.log(value)}
                history={this.props.history}
            />
        )
    }
}

export default GetPaper