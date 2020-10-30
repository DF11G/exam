import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Collapse } from 'antd';
import "antd/dist/antd.css"
import Axios from 'axios'

const { Panel } = Collapse;

class CreatePaper extends Component {

    constructor(props) {
        super(props)
    }

    text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness!`;

    callback(key) {
        console.log(key);
    }

    render() {
        return (
            <Collapse onChange={this.callback}>
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
        )
    }

}

export default withRouter(CreatePaper)
