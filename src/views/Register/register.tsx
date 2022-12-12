import styles from './style.module.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Spin, message } from 'antd';
import { useRequest } from 'ahooks'
import { registerUser, type RegisterData } from '@/apis/user'
import {Link, useNavigate} from 'react-router-dom'

export default function Register() {

  const [ messageApi, contextHolder ] = message.useMessage()
  const navigate = useNavigate()

  const { loading, run } = useRequest(registerUser, {
    manual: true,
    onSuccess: (data => {
      console.log('Register Result', data)
      messageApi[data.success ? 'info' : 'error'](data.message, 1).then(res => {
        navigate('/login', {
          state: data.data
        })
      })
      // if ()
    }),
    onError: error => {
      console.log('onError Register Result', error)
      messageApi.error(`Err! ${error.message}`, 1)
    }
  });

  const onFinish = (registerData: RegisterData) => {
    console.log('Received values of form: ', registerData);
    run(registerData)
  };
  return <>
    {contextHolder}
    <div className={styles.loginWrapper}>
      
      <Spin spinning={loading}>
        <Form
          name="normal_login"
          className={styles.loginForm}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <h1 className={styles.loginTitle}>Sunny Admin</h1>
          {/* <h6>{data}</h6> */}
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
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
          {/* <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className={styles.loginFormForgot} href="">
              Forgot password
            </a>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
              Sign up
            </Button>
            <span className={styles.text}>Or</span> <Link to="/login">login now!</Link>
          </Form.Item>
        </Form>
      </Spin>
      
    </div>
  </>
}