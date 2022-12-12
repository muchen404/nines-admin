import styles from './style.module.scss'
const { Header, Footer, Sider, Content } = Layout;
import SideBarNav from '@/components/SideBarNav/SideBarNav'
import { useState } from 'react';
import { Layout, theme, Breadcrumb, Menu } from 'antd';
import { TabManager } from '@/components/TabManager/TabManager';

export default function Dashboard () {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 选则 menu item 触发
  function onMenuselect(item: any) {
    console.log('menu selected', item)
  }

  return <>
    <Layout className={styles.layoutWrapper}>
      <Sider collapsible collapsed={collapsed} collapsedWidth={75} onCollapse={(value) => setCollapsed(value)}>
        <SideBarNav onMenuSelect={onMenuselect}/>
      </Sider>
      <Layout className={styles.siteLayout}>
        <Header style={{ paddingLeft: 20, background: colorBgContainer }} >Header</Header>
        <Content  style={{ margin: '0 16px' }}>
          <TabManager></TabManager>
        </Content>
      </Layout>
    </Layout>
  </>
}