import styles from './style.module.scss'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

export default function Home() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return <>
    <div className={styles.loginWrapper}>
      
      <Form
        name="normal_login"
        className={styles.loginForm}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <h1 className={styles.loginTitle}>Sunny Admin</h1>
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
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className={styles.loginFormForgot} href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </div>
  </>
}