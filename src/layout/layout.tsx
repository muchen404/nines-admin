import styles from  './style.module.scss'
import { Layout } from 'antd';
import { Route, Routes, Link } from 'react-router-dom';
import Home from '../views/Home'
import Dashboard from './layout-dashborad';

export default function ILayout() {

  return <>
    <Layout className={styles.layoutWrapper}>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/dashboard" element={ <Dashboard /> }></Route>
      </Routes>
    </Layout>
  </>
}