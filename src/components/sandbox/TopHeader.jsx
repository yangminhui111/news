import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  } from '@ant-design/icons';
  import { Layout } from 'antd';
  import React, { useState } from 'react';
  const { Header } = Layout;
const TopHeader = () => {
    const [collapsed, setCollapsed] = useState(false);
    const changeCollapsed=()=>{
      setCollapsed(!collapsed)
    }
    const back=()=>{
      localStorage.removeItem('token')
    }
    return ( 
        <Header
          className="site-layout-background"
          style={{
            padding: '0 15px 0',
            display:'flex',
            justifyContent:'space-between'
          }}
        >
          {collapsed ? <MenuUnfoldOutlined onClick={changeCollapsed}/> : <MenuFoldOutlined onClick={changeCollapsed}/>}
          <div onClick={back}>退出</div>
        </Header>
     );
}
 
export default TopHeader;