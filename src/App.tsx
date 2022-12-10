import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/reset.scss'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
// import bn_BD from 'antd/locale/bn_BD'

import Layout from './layout/layout'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={{
        // algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#8245eb',
          colorLink: '#8245eb'
        }
      }}>
        <Layout />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
)
