import React, { Component } from 'react'
import "antd/dist/antd.css"
import Axios from 'axios'
import { withRouter } from "react-router-dom"
import { Form, Input, Button, PageHeader } from 'antd';
import "./ChangePassword.css"
import store from '../Store/Index'
import { handleUserLogout } from '../Store/ActionCreators'
import '../Common.css'


class ChangePassword extends Component {

  constructor(props) {
      super(props)
  }
  
  onFinish = (values) => {
    console.log('Received values of form: ', values);
    Axios.post('/exam/user/changePassword', {
      account: values.account,
      oldPassword: values.oldPassword,
      newPassword: values.newPassword
    }).then((res) => {
      if (res.data.code === 1) {
        const action = handleUserLogout()
        store.dispatch(action)
          this.props.history.push('/login')
          alert('修改成功')
      } else if (res.code === 7) {
          alert('账号不存在或密码错误')
      } else {
          console.log(res)
          alert('请求错误')
      }
    }).catch(() => {
      alert('服务器错误')
    })
  };

  render() {
    return (
      <div className="changePassword">
        <PageHeader
            className="site-page-header"
            onBack={() => this.props.history.goBack()}
            title="修改密码"
        />
        <Form
          name="changePassword"
          onFinish={this.onFinish}
          scrollToFirstError
          className="changePassword-form"
        >

          <Form.Item
            name="account"
            label="账号"
            rules={[{ required: true, message: '请输入账号'}]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            name="oldPassword"
            label="原密码"
            rules={[{ required: true, message: '请输入原密码!'}]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="newPassword"
            label="新密码"
            rules={[{ required: true, message: '请输入新密码!'}]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
            name="confirm"
            label="再次输入新密码"
            dependencies={['newPassword']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请再次确认新密码!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('两次输入的密码不匹配!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item>
            <Button type="primary" htmlType="submit" className="changePassword-form-button">修改密码</Button>
          </Form.Item>

        </Form>
      </div>
    );
  }

}

export default withRouter(ChangePassword)
