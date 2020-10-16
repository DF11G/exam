import React, { Component } from 'react'
import "antd/dist/antd.css";
import { InputNumber, Input, Button } from 'antd';
import { EditOutlined, TagsOutlined } from '@ant-design/icons';
import store from './Store/Index'
import Axios from 'axios'

const { TextArea } = Input;

class SetPaper extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleSetPaper = this.handleSetPaper.bind(this)
        this.handleInputSetPaperName = this.handleInputSetPaperName.bind(this)
        this.handleInputSetPaperIntroduction = this.handleInputSetPaperIntroduction.bind(this)
        this.handleInputSetPaperTime = this.handleInputSetPaperTime.bind(this)
        this.handleInputSetStuInf = this.handleInputSetStuInf.bind(this)
    }
    handleSetPaper() {
        let stuInf = this.state.setStuInf.trim().split(/\s+/)
        Axios.put('exam/paper/create', {
            title: this.state.setPaperName,
            introduction: this.state.setPaperIntroduction,
            time: this.state.setPaperTime,
            collection: JSON.stringify(stuInf)
        }).then((res) => {
            console.log(res)
            alert('创建成功')
        }).catch(() => {
            alert('创建失败')
        })
        this.props.history.push('/editPaper')
    }
    handleInputSetPaperName(e) {
        this.setState({
            setPaperName: e.target.value
        })
    }
    handleInputSetPaperIntroduction(e) {
        this.setState({
            setPaperIntroduction: e.target.value
        })
    }
    handleInputSetPaperTime(value) {
        this.setState({
            setPaperTime: value
        })
    }
    handleInputSetStuInf(e) {
        this.setState({
            setStuInf: e.target.value
        })
    }
    render() {
        return (
            <div>
                <div>试卷标题</div>
                <Input
                    size="large"
                    placeholder="试卷标题"
                    prefix={<EditOutlined />}
                    value={this.state.setPaperName}
                    onChange={this.handleInputSetPaperName}
                />
                <div>试卷简介</div>
                <TextArea
                    rows={4}
                    placeholder="试卷简介"
                    value={this.state.setPaperIntroduction}
                    onChange={this.handleInputSetPaperIntroduction}
                />
                <div>限定时间(分钟/min)</div>
                <InputNumber
                    min={1}
                    max={999}
                    defaultValue={10}
                    value={this.state.setPaperTime}
                    onChange={this.handleInputSetPaperTime}
                />
                <div>录入学生信息(姓名、学号等，用空格隔开)</div>
                <Input
                    size="large"
                    placeholder="姓名 学号 ..."
                    prefix={<TagsOutlined />}
                    value={this.state.setStuInf}
                    onChange={this.handleInputSetStuInf}
                />
                <div>
                    <Button
                        onClick={this.handleSetPaper}
                        type="primary"
                        histroy={this.props.history}
                    >
                        提交
                    </Button>
                </div>
            </div>
        )
    }
}
export default SetPaper