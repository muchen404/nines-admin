import styles from  './style.module.scss'
import { Layout } from 'antd';
import { Route, Routes, useRoutes } from 'react-router-dom';
import Login from '@/views/Login/login'
import Register from '@/views/Register/register'
import Dashboard from './layout-dashborad';
import path from 'path';

const routes = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]

export default function ILayout() {
  const Element = useRoutes(routes)
  return <>
    <Layout className={styles.layoutWrapper}>
      { Element }
      {/* <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={ <Dashboard /> }></Route>
      </Routes> */}
    </Layout>
  </>
}