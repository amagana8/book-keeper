import React from 'react';
import {useHistory} from 'react-router-dom';
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
    const history = useHistory();
    async function onFinish(values) {
        let registerData = {
            "username": values.username,
            "email": values.email,
            "password": values.password
        }
        let response = await axios.post("https://app-book-keeper.herokuapp.com/api/auth/register", registerData);
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
        response = await axios.get("https://app-book-keeper.herokuapp.com/api/auth/user", config);
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
