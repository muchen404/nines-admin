import React, { useRef, useState } from 'react';
import { Tabs, theme } from 'antd';
import './reset-antd.scss'

const initialItems = [
  { label: 'Dashboard', children: <TabWindow />, key: '1', 
  closable: false },
  // { label: 'Tab 2', children: <TabWindow />, key: '2' },
  // {
  //   label: 'Tab 3',
  //   children: <TabWindow />,
  //   key: '3',
  //   closable: false,
  // },
];

function TabWindow() {
  return <>
    new Tab Content
  </>
}

export const TabManager: React.FC = () => {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({ label: 'New Tab', children: <TabWindow />, key: newActiveKey });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <Tabs
      style={{ marginTop: 20, minHeight: 360 }}
      className="tab-window"
      type="editable-card"
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
    />
  );
}