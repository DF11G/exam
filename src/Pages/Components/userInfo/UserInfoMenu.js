import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "antd/dist/antd.css"

class UserInfoMenu extends Component {

    constructor(props) {
        super(props)
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
        <Menu.Item danger onClick={() => {}}>登出</Menu.Item>
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
