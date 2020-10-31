import React, { Component } from 'react'
import { Redirect, withRouter } from "react-router-dom";
import { Table, Tag, Space, PageHeader } from 'antd';

import '../Common.css'

class PapersList extends Component {

    constructor(props) {
        super(props)
    }
    columns = [
        {
          title: '试卷标题',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: '代码',
          dataIndex: 'code',
          key: 'code',
        },
        {
          title: '试卷状态',
          key: 'state',
          dataIndex: 'state',
          render: state => {
            let color, tag;
            if(state === 1) {
                color = 'red'
                tag = '创建中' 
            } else if(state === 2) {
                color = 'green'
                tag = '作答中'
            } else if(state == 3) {
                color = 'grey'
                tag = '删除'
            }
            return (
                <Tag color={color} key={tag}>
                    {tag}
                </Tag>
            );
          },
        },
        {
          title: '动作',
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <a>编辑</a>
              <a>删除</a>
              <a>复制作答链接</a>
            </Space>
          ),
        },
      ];
      
        data = [
        {
            title: 'x试卷',
            code: '23333',
            state: 2
        },
        {
            title: 'xx试卷',
            code: '23333',
            state: 1
        }
      ];
    
    render() {
        return (
            <div>
              <PageHeader
                  className="site-page-header"
                  title="创建试卷"
              />
              <Table columns={this.columns} dataSource={this.data} />
            </div>
        )
    }
}

export default withRouter(PapersList)