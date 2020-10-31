import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import Axios from 'axios'

import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "antd/dist/antd.css"


function LoginMenu(props) {
   let logout=() => {
    Axios.get('/exam/user/logout').then((res) => {
        if (res.data.code === 1) {
          window.location.href="/login"
        } else {
            alert('请求错误')
        }
    }).catch(() => {
        alert('服务器错误')
    })
  };
  let menuList = (
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
      <Menu.Item danger onClick={logout}>登出</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menuList}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {props.name} <DownOutlined/>
      </a>
    </Dropdown>
  );
}

function NotLoginMenu() {
  return (
    <a className="ant-dropdown-link" href="login">
      点击此处登录 <DownOutlined/>
    </a>
  );
}

function UserMenu(props) {
  if (props.name != null) {
    return <LoginMenu name={props.name} />;
  } else {
    return <NotLoginMenu />;
  }
}

class UserInfoMenu extends Component {

    //todo 组件构造器内从redux中取登录的姓名来渲染
    constructor(props) {
      super(props)
      this.state = {
        name: null
      }
    }

    render() {
      return (
        <div className="login">
          <UserMenu name={this.state.name} />
        </div>
      )
    }

}

export default withRouter(UserInfoMenu)
