import React, { Component } from 'react'
import { Input, Button } from 'antd'
import "antd/dist/antd.css";
import store from './Store/Index'
import Axios from 'axios'

const { TextArea } = Input;

class ComplexQuestionCreate extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleComplexQuestionSubmit = this.handleComplexQuestionSubmit.bind(this)
        this.handleComplexTitleValueChange = this.handleComplexTitleValueChange.bind(this)
        this.handleComplexMaterialValueChange = this.handleComplexMaterialValueChange.bind(this)
    }

    handleComplexQuestionSubmit() {
        Axios.put('/exam/paper/addPolymerizationProblem', {
            paperId: this.state.curPaperID,
            title: this.state.complexTitleValue,
            material: this.state.complexMaterialValue
        }).then((res) => {
            console.log(res)
        }).catch(() => {
            alert('提交失败')
        })
    }

    handleComplexMaterialValueChange(e) {
        this.setState({
            complexMaterialValue: e.target.complexMaterialValue
        })
    }

    handleComplexTitleValueChange(e) {
        this.setState({
            complexTitleValue: e.target.complexTitleValue
        })
    }

    render() {
        return (
            <div>
                <div>输入题目名称</div>
                <Input
                    value={this.state.complexTitleValue}
                    onChange={this.handleComplexTitleValueChange}
                    placeholder="题目名称"
                />
                <div>输入题干材料</div>
                <TextArea
                    value={this.state.complexMaterialValue}
                    onChange={this.handleComplexMaterialValueChange}
                    rows={4}
                    placeholder="题干材料"
                />
                <Button
                    type="primary"
                    onClick={this.handleComplexQuestionSubmit}
                >创建复合题</Button>
            </div>
        )
    }
}

export default ComplexQuestionCreate