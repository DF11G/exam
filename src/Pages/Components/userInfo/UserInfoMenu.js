import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom"
import Axios from 'axios'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import "antd/dist/antd.css"
import store from '../Store/Index'
import { handleUserLogout } from '../Store/ActionCreators'


function LoginMenu(props) {
  let logout = () => {
    Axios.get('/exam/user/logout').then((res) => {
      if (res.data.code === 1) {
        const action = handleUserLogout()
        store.dispatch(action)
        props.props.history.push('/login')
      } else {
        alert('请求错误')
      }
    }).catch((e) => {
      alert(e)
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
        <Link to="/papersList">
          创建的试卷
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/changePassword">
          修改密码
        </Link>
      </Menu.Item>
      <Menu.Item danger onClick={logout}>登出</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menuList}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {props.props.name} <DownOutlined />
      </a>
    </Dropdown>
  );
}

function NotLoginMenu() {
  return (
    <Link className="ant-dropdown-link" to="/login">
      点击此处登录 <DownOutlined />
    </Link>
  );
}

function UserMenu(props) {
  if (props.props.name != null) {
    return <LoginMenu props={props.props} />;
  } else {
    return <NotLoginMenu />;
  }
}


class UserInfoMenu extends Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="login">
        <UserMenu props={this.props} />
      </div>
    )
  }
}

export default withRouter(UserInfoMenu)
