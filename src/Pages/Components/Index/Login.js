import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Form, Input, Button, Checkbox, PageHeader } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "antd/dist/antd.css"
import Axios from 'axios'
import store from '../Store/Index'
import { handleGetUserInfAction } from '../Store/ActionCreators'
import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props)
    }

    onFinish = (values) => {
        Axios.post('/exam/user/loginCheck', {
            "account": values.account,
            "password": values.password
        }).then((res) => {
            if (res.data.code === 1) {
                const action = handleGetUserInfAction(res.data.object.name, res.data.code)
                store.dispatch(action)
                this.props.history.push('/main')
            } else if (res.data.code === 3) {
                alert('账户名密码错误')
            } else {
                alert('请求错误')
            }
        }).catch(() => {
            alert('服务器错误')
        })
    };

    render() {
        return (
          <div className="login">
            <PageHeader
                className="site-page-header"
                backIcon="false"
                title="登录"
            />
            <Form
              name="login_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="account"
                rules={[
                  {
                    required: true,
                    message: '请输入您的账号!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="账号" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入您的密码!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住我</Checkbox>
                </Form.Item>
        
                <a className="login-form-forgot" href="changePassword">
                  修改密码
                </a>
              </Form.Item>
        
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                Or <a href="register">立即注册!</a>
              </Form.Item>
            </Form>
          </div>
          )
    }

}

export default withRouter(Login)
