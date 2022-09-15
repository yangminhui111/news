import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  } from '@ant-design/icons';
  import { Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  const { Header } = Layout;
const TopHeader = () => {
    const [collapsed, setCollapsed] = useState(false);
    return ( 
        <Header
          className="site-layout-background"
          style={{
            padding: '0 15px 0',
          }}
        >
          {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
        </Header>
     );
}
 
export default TopHeader;