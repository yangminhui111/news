import {
  HomeOutlined,
  SolutionOutlined,
  UserOutlined,
  UnlockOutlined,
  TeamOutlined,
  KeyOutlined,
  MailOutlined,
  FormOutlined,
  AlignLeftOutlined,
  RadarChartOutlined,
  AuditOutlined,
  HighlightOutlined,
  OrderedListOutlined,
  ExclamationCircleOutlined,
  SnippetsOutlined,
  CheckCircleOutlined,
  StopOutlined
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
const { Sider } = Layout;
const iconList = {
  "/home": <HomeOutlined />,
  "/user-manage": <SolutionOutlined />,
  "/user-manage/list": <UserOutlined />,
  "/right-manage": <UnlockOutlined />,
  "/right-manage/role/list": <TeamOutlined />,
  "/right-manage/right/list": <KeyOutlined />,
  "/news-manage": <MailOutlined />,
  "/news-manage/add": <FormOutlined />,
  "/news-manage/draft": <AlignLeftOutlined />,
  "/news-manage/category": <RadarChartOutlined />,
  "/audit-manage": <AuditOutlined />,
  "/audit-manage/audit": <HighlightOutlined />,
  "/audit-manage/list": <OrderedListOutlined />,
  "/publish-manage": <SnippetsOutlined />,
  "/publish-manage/unpublished": <ExclamationCircleOutlined />,
  "/publish-manage/published": <CheckCircleOutlined />,
  "/publish-manage/sunset": <StopOutlined />
}
function getItem(label, key, icon, children, type) {
  let child = [];
  if (children?.length) {
    children.forEach(item => {
      if (item.pagepermisson) {
        child.push(getItem(item.title, item.key, iconList[item.key]))
      }
    })
  }
  return {
    key,
    icon,
    children: children?.length ? child : undefined,
    label,
    type,
  };
}
const SideMenu = ({history,location}) => {
  const [items, setitems] = useState([])
  useEffect(() => {
    axios.get('http://localhost:5000/rights?_embed=children')
      .then(res => {
        let data = res.data;
        setitems(data.map(item => {
          if (item.pagepermisson) {
            return getItem(item.title, item.key, iconList[item.key], item.children)
          }
        }))
      })
  }, [])
  return (
    <Sider>
      {/* 让侧边栏超出屏幕范围的时候自己滚动，不让整个页面滚动 */}
      <div style={{ display: 'flex', height: '100%', flexDirection: 'column'}}>
        <div style={{ flex: '1', overflow: 'auto' }}>
          <Menu
            theme="dark"
            mode="inline"
            // 储存选中的导航，刷新之后不会消失,
            // selectedKeys将组件设置为受控组件，以免重新刷新路径跳转回home页
            selectedKeys={[location.pathname]}
            // 展开选中的导航，刷新之后不会消失
            defaultOpenKeys={['/'+location.pathname.split('/')[1]]}
            items={items}
            onClick={(item) => history.push(item.key)}
          />
        </div>
      </div>
    </Sider>
  );
}

export default withRouter(SideMenu);