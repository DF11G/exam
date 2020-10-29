import React, { Component } from 'react'
import { Input, Button, Radio } from 'antd'
import "antd/dist/antd.css";
import store from './Store/Index'
import Answer from './Answer'
import Choice from './Choice'
import { handleQuestion } from './Store/ActionCreators'

const { TextArea } = Input;

class ComplexQuestionCreate extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleComplexQuestionSubmit = this.handleComplexQuestionSubmit.bind(this)
        this.handleComplexTitleValueChange = this.handleComplexTitleValueChange.bind(this)
        this.handleComplexMaterialValueChange = this.handleComplexMaterialValueChange.bind(this)
        this.handleQuestionChange = this.handleQuestionChange.bind(this)
    }

    handleComplexQuestionSubmit() {
        // Axios.put('/exam/paper/addPolymerizationProblem', {
        //     paperId: this.state.curPaperID,
        //     title: this.state.complexTitleValue,
        //     material: this.state.complexMaterialValue
        // }).then((res) => {
        //     this.state.isEditComplexQuestion = 1
        //     console.log(res)
        // }).catch(() => {
        //     alert('提交失败')
        // })
        this.state.isEditComplexQuestion = 1
        this.setState(store.getState())
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

    handleQuestionChange(e) {
        this.setState({
            question: e.target.value
        })
        console.log(e.target.value)
        const action = handleQuestion(this.state.question)
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.isEditComplexQuestion ? (
                            <div>
                                <div>
                                    <div>选择此题种类</div>
                                    <Radio.Group
                                        buttonStyle="solid"
                                        onChange={this.handleQuestionChange}
                                    >
                                        <Radio.Button value={0}>材料题</Radio.Button>
                                        <Radio.Button value={1}>选择题</Radio.Button>
                                    </Radio.Group>
                                    <div>{
                                        this.state.question ? (<Choice />) : (<Answer />)
                                    }</div>
                                </div>
                            </div>
                        ) : (
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
                                </div>)
                    }
                </div>


            </div >
        )
    }
}

export default ComplexQuestionCreate