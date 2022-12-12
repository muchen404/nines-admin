import styles from './style.module.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Spin } from 'antd';
import axios from '@/utils/axios'
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useMount } from 'ahooks';



export default function Login() {

  const [form] = Form.useForm()
  const navigate = useNavigate()
  const location = useLocation(); 

  useMount(() => {
    console.log(location)
    const { state = {} } = location
    if(state && state.id) {
      form.setFieldValue('username', state.username)
      form.setFieldValue('password', state.password)
    }
  })

  function getUsers () {
    return axios.request({
      method: 'Get',
      url: '/user'
    })
  }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
  };

  function goDashboard() {
    navigate('/dashboard')
  }

  return <div className={styles.loginWrapper}>
    
    <div className={styles.loginBackground} />
    <div className={styles.loginContent}>
      <Spin spinning={false}>
        <Form
          name="normal_login"
          form={form}
          className={styles.loginForm}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div className={styles.loginLogo}>
            <img src="/admin-logo.png" alt="" />
          </div>
          <h1 className={styles.loginTitle} onClick={() => {goDashboard()}} >Hi, Welcome to Nines Admin</h1>
          {/* <h6>{ JSON.stringify(data) }</h6> */}
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input 
              prefix={<UserOutlined className="site-form-item-icon" />} 
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox className={styles.text}>Remember me</Checkbox>
            </Form.Item>

            <a className={styles.loginFormForgot}>
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
              Log in
            </Button>
            <span className={styles.text}>Or</span> <Link to="/register">register now!</Link>
          </Form.Item>
        </Form>
      </Spin>
      <div className={styles.loginIntro}>
      </div>
    </div>
  </div>
}