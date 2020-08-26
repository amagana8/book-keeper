import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {Layout, Menu, Form, Input, Button} from 'antd';

const {Header, Content} = Layout;

const validateMessages = {
    required: '${label} is required!',
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
    const onFinish = values => {
        console.log('Success:', values);
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
                 <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
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
                    Login
                </Button>
                </Form.Item>
            </Form>
            </Content>
        </Layout>
    </div>
    )
}

export default Register;
