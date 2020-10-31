import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Collapse, PageHeader } from 'antd';
import "antd/dist/antd.css"
import Axios from 'axios'
import '../Common.css'

const { Panel } = Collapse;

class EditProblem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            accordion: true
        }
    }

    text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness!`;

    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <div className="createPaper">
                <PageHeader
                    className="site-page-header"
                    title="创建试卷"
                />
                <Collapse onChange={this.callback} accordion={this.state.accordion}>
                    <Panel header="This is panel header 1" key="1">
                        <Collapse defaultActiveKey="1">
                            <Panel header="This is panel nest panel" key="1">
                                <p>{this.text}</p>
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>{this.text}</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>{this.text}</p>
                    </Panel>
                </Collapse>
            </div>
        )
    }

}

export default withRouter(EditProblem)
