import styles from './style.module.scss'
const { Header, Footer, Sider, Content } = Layout;
import SideBarNav from '@/components/SideBarNav/SideBarNav'
import { useState } from 'react';
import { Layout, theme, Breadcrumb, Menu } from 'antd';

export default function Dashboard () {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return <>
    <Layout className={styles.layoutWrapper}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <SideBarNav />
      </Sider>
      <Layout className={styles.siteLayout}>
        <Header style={{ paddingLeft: 20, background: colorBgContainer }} >Header</Header>
        <Content  style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            Bill is a cat.
          </div>
        </Content>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
  </>
}