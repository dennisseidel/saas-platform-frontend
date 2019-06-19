import React from 'react';
import {Menu, Button} from 'antd';

import style from './Header.module.css';

const header = (props) => {
  return (
    <div>
      <div className={style.logo}/>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
        lineHeight: '64px',
        float: 'left'
      }}>
        <Menu.Item key="1">Produkte</Menu.Item>
        <Menu.Item key="2">Sicherheit</Menu.Item>
        <Menu.Item key="3">Preise</Menu.Item>
        <Menu.Item key="4">Dokumentation</Menu.Item>
        <Menu.Item key="5">Support</Menu.Item>
      </Menu>
      <div style={{
        float: 'right'
      }}>
        <Button type="primary" href="/management">Login</Button>
      </div>
    </div>
  );
}

export default header;
