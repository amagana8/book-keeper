import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {Layout, Menu, Form, Input, InputNumber, Button} from 'antd';

const {Header, Content} = Layout;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a validate number!',
    }
};

const AddBook = () => {
    async function onFinish(values) {

    };

    return (
        <div className="AddBook">
          <Layout>
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['4']}>
                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/browse">Browse</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/myList">My List</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/addBook">Add Book</Link></Menu.Item>
              </Menu>
            </Header>
            <Content>
                <br></br>
                <h2>Add a new book to the database.</h2>
                <Form {...layout} name="nest-messages"  onFinish={onFinish} style={{width: '75%'}} validateMessages={validateMessages}>
                    <Form.Item name={['data', 'title']} label="Title" rules={[{ required: true }]}>
                        <Input style={{width: '75%'}} />
                    </Form.Item>
                    <Form.Item name={['data', 'title2']} label="Native/Alternate Title">
                        <Input style={{width: '75%'}} />
                    </Form.Item>
                    <Form.Item name={['data', 'author']} label="Author">
                        <Input style={{width: '35%'}} />
                    </Form.Item>
                    <Form.Item name={['data', 'language']} label="Language">
                        <Input style={{width: '35%'}} />
                    </Form.Item>
                    <Form.Item name={['data', 'bookType']} label="Book Type">
                        <Input style={{width: '35%'}} />
                    </Form.Item>
                    <Form.Item name={['data', 'genre']} label="Genre">
                        <Input style={{width: '35%'}} />
                    </Form.Item>
                    <Form.Item name={['data', 'wordCount']} label="Word/Character Count" rules={[{ type: 'number' }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name={['data', 'ISBN']} label="ISBN" rules={[{ type: 'number' }]}>
                        <InputNumber style={{width: '35%'}} />
                    </Form.Item>
                    <Form.Item name={['data', 'summary']} label="Summary">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
          </Layout>
        </div>
      );
}

export default AddBook;
