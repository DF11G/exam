import React, { Component } from 'react'
import "antd/dist/antd.css"
import { Input, Button } from 'antd'
import store from './Store/Index'
import Axios from 'axios'

class Answer extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleAnswerSubmit = this.handleAnswerSubmit.bind(this)
        this.handleBodyValueChange = this.handleBodyValueChange.bind(this)
        this.handleQuestionValueChange = this.handleQuestionValueChange.bind(this)
        this.handleSolutionValueChange = this.handleSolutionValueChange.bind(this)
    }

    handleAnswerSubmit() {
        Axios.put('/exam/paper/addProblem', {
            paperId: this.state.curPaperID,
            polymerizationProblemId: 0,
            title: this.state.titleValue,
            material: this.state.materialValue,
            type: this.state.question,
            answer: this.state.solutionValue
        }).then((res) => {
            console.log(res)
        }).catch(() => {
            alert('提交失败')
        })
    }

    handleBodyValueChange(e) {
        this.setState({
            titleValue: e.target.titleValue
        })
    }

    handleQuestionValueChange(e) {
        this.setState({
            materialValue: e.target.materialValue
        })
    }

    handleSolutionValueChange(e) {
        this.setState({
            solutionValue: e.target.solutionValue
        })
    }

    render() {
        return (
            <div>
                <div>请输入问答题的标题。</div>
                <Input
                    value={this.state.titleValue}
                    onChange={this.handleBodyValueChange}
                    placeholder='题目标题'
                />
                <div>请输入问答题的材料。</div>
                <Input
                    value={this.state.materialValue}
                    onChange={this.handleQuestionValueChange}
                    placeholder='题目材料'
                />
                <div>请输入问答题的答案。</div>
                <Input
                    value={this.state.solutionValue}
                    onChange={this.handleSolutionValueChange}
                    placeholder='题目答案'
                />
                <Button
                    type="primary"
                    onClick={this.handleAnswerSubmit}
                >提交该问题</Button>
            </div>
        )
    }
}

export default Answer