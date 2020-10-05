import React, { Component, Fragment } from 'react'
import "antd/dist/antd.css";
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, SettingOutlined, IdcardOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class LoginMenu extends Component {
    state = {
        current: 'mail',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
    };

    handleRegister() {
        
    }

    render() {
        const { current } = this.state;
        return (
            <Menu selectedKeys={[current]} mode="horizontal">
                <Menu.Item onClick={this.handleClick} key="login" icon={<IdcardOutlined />}>
                    登录
                </Menu.Item>
                <Menu.Item onClick={this.handleClick} key="register" icon={<IdcardOutlined />}>
                    注册
                </Menu.Item>
                {/* <Menu.Item key="app" icon={<AppstoreOutlined />}>

                </Menu.Item>
                <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu> */}
                {/* <Menu.Item key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
          </a>
                </Menu.Item> */}
            </Menu>
        );
    }
}

export default LoginMenu

// ReactDOM.render(<App />, mountNode);