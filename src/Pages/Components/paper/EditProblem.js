import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Collapse, PageHeader, Button } from 'antd';
import "antd/dist/antd.css"
import Axios from 'axios'
import '../Common.css'
import CreateProblem from './CreateProblem'

const { Panel } = Collapse;

class EditProblem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            paper: null
        }
    }

    componentDidMount() {
        if(this.props.history.location.paperId != null) {
            this.getProblemsRequest()
        } else {
            this.props.history.push('/papersList')
        }
    }

    getProblemsRequest = () => {
        Axios.get('/exam/paper/getByPaperId?paperId=' + this.props.history.location.paperId).then((res) => {
            if (res.data.code === 1) {
                console.log(res.data.object)
                this.setState({
                    paper: res.data.object
                })
            } else if(res.data.code === 5) {
              alert('没有')
            } else {
              alert('请求错误')
            }
          }).catch(() => {
            alert('服务器错误')
          })
    }

    genExtra = () => (
        <Button type="primary" onClick={(e)=>{ 
            console.log(this.props.history.location.paperId)
            e.stopPropagation()}} danger>
            删除
        </Button>
      );

    callback(key) {
        console.log(key);
    }

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
      
    problemList = () => {
        if(this.state.paper != null) { 
            let problems = this.state.paper.problems
            let listItem = problems.map((problem) => 
                <Panel header={'第'+problem.sort+'题'} key={problem.sort}>
                    <h1>{problem.title}</h1>
                    <p>{problem.material}</p>
                </Panel>
            )
            return (
                <Collapse onChange={this.callback}>
                    {listItem}
                </Collapse>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className="createPaper">
                <PageHeader
                    className="site-page-header"
                    title="创建试卷"
                    onBack={() => this.props.history.goBack()} 
                />
                <this.problemList></this.problemList>
                <Button className="content-button" type="primary" onClick={()=>{
                    this.setState({
                        visible: true
                    })
                }}>创建新试题</Button>
                <CreateProblem 
                    visible={this.state.visible}
                    paperId={this.props.history.location.paperId} 
                    visibleChange={() => {
                        this.setState({
                            visible: !this.state.visible
                        })
                    }}
                    refreshProblems={this.getProblemsRequest}
                />
            </div>
        )
    }

}

export default withRouter(EditProblem)
