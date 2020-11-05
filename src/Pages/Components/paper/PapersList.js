import React, { Component } from 'react'
import { Redirect, withRouter } from "react-router-dom";
import { Table, Tag, Space, PageHeader, message, Modal } from 'antd';
import Axios from 'axios'

import '../Common.css'

class PapersList extends Component {

    constructor(props) {
      super(props)
      this.state = {
        data: null,
        deletePaper: null,
      }
    }

    componentDidMount() {
      this.getPapersListRequest()
    }

    getPapersListRequest() {
      Axios.get('/exam/paper/get').then((res) => {
        if (res.data.code === 1) {
          this.setState({
            data: res.data.object
          })
          this.setState({
            deletePaper: null,
          });
        } else if(res.data.code === 6) {
          alert('重新登录')
        } else {
          alert('请求错误')
        }
      }).catch(() => {
        alert('服务器错误')
      })
    }

    deletePaperRequest() {
      Axios.delete('/exam/paper/delete?paperId='+this.state.deletePaper.id)
      .then((res) => {
        if (res.data.code === 1) {
          message.success('删除成功！')
          this.getPapersListRequest()
        } else if(res.data.code === 6) {
          alert('重新登录')
        } else {
          alert('请求错误')
        }
      }).catch(() => {
        alert('服务器错误')
      })
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
              <a onClick={() => {
                this.props.history.push({
                  pathname: '/editProblem',
                  paperId: record.id
                })
              }}>编辑</a>
              <a onClick={() => {
                this.setState({
                  deletePaper: record
                })}}>删除</a>
              <a>复制作答链接</a>
            </Space>
          ),
        },
      ];

      handleOk = e => {
        this.deletePaperRequest()
      };
    
    render() {
        return (
            <div>
              <PageHeader
                  className="site-page-header"
                  onBack={() => this.props.history.goBack()}
                  title="管理试卷"
              />
              <Table columns={this.columns} dataSource={this.state.data} pagination={false}/>
              <Modal
                title={'删除试卷'}
                visible={this.state.deletePaper != null}
                onOk={this.handleOk}
                onCancel={()=>{
                  this.setState({
                    deletePaper: null,
                  })}}
                okText="确认删除"
                cancelText="取消"
              >
                <p>您确定要删除此试卷？删除后将不可恢复！</p>
              </Modal>
            </div>
        )
    }
}

export default withRouter(PapersList)