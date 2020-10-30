import React, { Component } from 'react'
import { withRouter, createBrowserHistory } from "react-router-dom";
import Axios from 'axios'

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "antd/dist/antd.css"

class UserInfoMenu extends Component {

    //todo 组件构造器内从redux中取登录的姓名来渲染
    constructor(props) {
        super(props)
    }

    logout() {
      Axios.get('/exam/user/logout').then((res) => {
          if (res.data.code === 1) {
            window.location.href="/login"
          } else {
              alert('请求错误')
          }
      }).catch(() => {
          alert('服务器错误')
      })
    }

    menuList = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            作答过的试卷
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            创建的试卷
          </a>
        </Menu.Item>
        <Menu.Item danger onClick={this.logout}>登出</Menu.Item>
      </Menu>
    );

    render() {
        return (
          <div className="login">
            <Dropdown overlay={this.menuList}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                用户姓名 <DownOutlined/>
              </a>
            </Dropdown>
          </div>
          )
    }

}

export default withRouter(UserInfoMenu)
