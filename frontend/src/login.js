import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import {Layout, Menu, Form, Input, Button} from 'antd';

const {Header, Content} = Layout;


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
    async function onFinish(values) {
        let loginData = {
            "username": values.username,
            "password": values.password
        }
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login', loginData);
        let token = response.data.token;
        localStorage.setItem('token', token);
      };
    
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    
    return (
    <div className="App">
        <Layout>
            <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['5']}>
                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/browse">Browse</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/myList">My List</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/addBook">Add Book</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/login">Login</Link></Menu.Item>
            </Menu>
            </Header>
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
