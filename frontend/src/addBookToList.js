import React from 'react';
import {useHistory} from 'react-router-dom';
import NavBar from './components/NavBar';
import {Layout, Form, InputNumber, Button, Select} from 'antd';
import './App.css';
import axios from 'axios';

const {Content} = Layout;
const { Option } = Select;

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

const AddBookToList = () => {
    const history = useHistory();
    async function onFinish(values) {
        let token = localStorage.getItem('token');
	    token = "Token " + token;
        var data = JSON.stringify(
            {"owner":localStorage.getItem('user'),
            "bookTitle":localStorage.getItem('title'),
            "bookRating":values.bookRating,
            "chaptersRead":values.chaptersRead,
            "status":values.status
        });

        var config = {
            method: 'post',
            url: 'http://localhost:8000/api/bookList/',
            headers: { 
                'Content-Type': 'application/json', 
                'Authorization': token
            },
            data : data
        };

        axios(config)
        .then(function (response) {
            localStorage.removeItem('title');
        })
        .catch(function (error) {
            console.log(error);
        });
        history.push("/myList");
    }

    return(
        <div>
            <Layout>
                <NavBar />
                <Content>
                    <br></br>
                    <h2 className="App">{localStorage.getItem('title')}</h2>
                    <Form {...layout} name="nest-messages"  onFinish={onFinish} style={{width: '75%'}} validateMessages={validateMessages}>
                        <Form.Item name="bookRating" label="Rating" rules={[{ type: 'number' }]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item name="chaptersRead" label="ChaptersRead" rules={[{ type: 'number' }]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item name="status" label="Status" rules={[{required: true}]}>
                            <Select placeholder="Select status" style={{width: '50%'}}>
                                <Option value="Reading">Reading</Option>
                                <Option value="Completed">Completed</Option>
                                <Option value="On-Hold">On-Hold</Option>
                                <Option value="Dropped">Dropped</Option>
                                <Option value="Plan to Read">Plan to Read</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Add to List
                            </Button>
                        </Form.Item>
                    </Form>
                </Content>
            </Layout>
        </div>
    );
}

export default AddBookToList;