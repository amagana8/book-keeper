import React from 'react';
import GuestNavBar from './components/GuestNavBar';
import './App.css';
import {Layout, Form, Input, Button} from 'antd';
import axios from 'axios';

const {Content} = Layout;

const validateMessages = {
    types: {
        email: 'That is not a valid email!'
    }
};

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

function Register() {
    async function onFinish(values) {
        let registerData = {
            "username": values.username,
            "email": values.email,
            "password": values.password
        }
        await axios.post("http://127.0.0.1:8000/api/auth/register", registerData);
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
            <h2>Signup for BookKeeper</h2>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={validateMessages}
                style={{width: '75%'}}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ type: 'email', required: true, message:"Please input your email!" }]}
                >
                    <Input />
                </Form.Item>
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
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            </Content>
        </Layout>
    </div>
    )
}

export default Register;
