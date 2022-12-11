import React, { useState } from 'react';
import {
  BarsOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styles from './style.module.scss'

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('用户管理', '1', <UserOutlined />),
  getItem('角色管理', '2', <TeamOutlined />),
  getItem('菜单管理', '3', <BarsOutlined />),
];

type SideMenuType = (props: { 
  onMenuSelect: (item: any) => void 
}) => React.ReactElement

const SideMenu: SideMenuType = ({ onMenuSelect }) => {

  function onMenuItemSelected(selectedItem: any) {
    onMenuSelect(selectedItem)
  }

  return (
    <div>
      <div className={styles.SidebarLogo}>
        <img style={{ height: '40px' }} src="/admin-logo.png" alt="" />
      </div>
      <Menu 
        theme="dark" 
        defaultSelectedKeys={['1']} 
        mode="inline" 
        items={items} 
        onSelect={onMenuItemSelected}
      />
    </div>
  );
};

export default SideMenu;