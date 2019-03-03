import React from 'react';
import {Menu, Icon } from 'antd';
import { Auth } from 'aws-amplify';

import style from './ManagementHeader.module.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const header = (props) => {
  return (
    <div>
      <a href="/"><div className={style.logo}/></a> 
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
        lineHeight: '64px',
        float: 'right'
      }}>
        <Menu.Item key="1">
          <a href="/management">Services</a>
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Account</span>}>
          <Menu.Item key="setting:1" onClick={() => Auth.signOut() }>Sign out</Menu.Item>
        </SubMenu>
        <Menu.Item key="3">Support</Menu.Item>
      </Menu>
    </div>
  );
}

export default header;
