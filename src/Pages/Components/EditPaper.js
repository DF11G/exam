import React, { Component } from 'react'
import Answer from './Answer'
import Choice from './Choice'
import ComplexQuestionCreate from './ComplexQuestionCreate'
import "antd/dist/antd.css"
import { Radio } from 'antd';
import store from './Store/Index'
import { handleQuestion, handleQuestionType } from './Store/ActionCreators'
import Axios from 'axios'

class EditPaper extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleQuestionChange = this.handleQuestionChange.bind(this)
        this.handleQuestionTypeChange = this.handleQuestionTypeChange.bind(this)

    }

    handleQuestionChange(e) {
        this.setState({
            question: e.target.value
        })
        console.log(e.target.value)
        const action = handleQuestion(this.state.question)
        store.dispatch(action)
    }

    handleQuestionTypeChange(e) {
        this.setState({
            questionType: e.target.value
        })
        const action = handleQuestionType(this.state.questionType)
        store.dispatch(action)
    }

    render() {

        return (
            <div>
                <div>您正在编辑第 {this.state.curPaperPage} 大题</div>
                <div>选择此题种类</div>
                <div>
                    <Radio.Group
                        buttonStyle="solid"
                        onChange={this.handleQuestionTypeChange}
                    >
                        <Radio.Button value={0}>普通题</Radio.Button>
                        <Radio.Button value={1}>复合题</Radio.Button>
                    </Radio.Group>
                </div>

                <div>{

                    this.state.questionType ? (<ComplexQuestionCreate />) : (
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
                    )
                }</div>
            </div>
        )
    }
}

export default EditPaper