import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import GuestNavBar from './components/GuestNavBar';
import axios from 'axios';
import './App.css';
import {Layout, Form, Input, Button} from 'antd';

const {Content} = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
    const history = useHistory();
    async function onFinish(values) {
        let loginData = {
            "username": values.username,
            "password": values.password
        }
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login', loginData);
        let token = response.data.token;
        localStorage.setItem('token', token);

        token = localStorage.getItem('token');
	    token = "Token " + token;
        let config = {
            headers: {
                'Authorization': token,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
        response = await axios.get("http://127.0.0.1:8000/api/auth/user", config);
        let user = response.data.id;
        localStorage.setItem('user', user);
        
        history.push("/myList");
      };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    
    return (
    <div className="App">
        <Layout>
            <GuestNavBar />
            <Content>
            <br></br>
            <h2>Login to BookKeeper</h2>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                style={{width: '75%'}}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
            <Link to="/register">Create an Account here</Link>
            </Content>
        </Layout>
    </div>
    )
}

export default Login;
