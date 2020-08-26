import React from 'react';
import {useHistory} from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import {Layout, Form, Input, InputNumber, Button, Select} from 'antd';
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

const AddBook = () => {
    const history = useHistory();
    async function onFinish(values) {
        let bookData = {
            "title": values.title,
            "title2": values.title2,
            "author": values.author,
            "language": values.language,
            "bookType": values.bookType,
            "genre": values.genre,
            "wordCount": values.wordCount,
            "ISBN": values.ISBN,
            "summary": values.summary
        }
        await axios.post("http://localhost:8000/api/book/", bookData);
        history.push("/browse");
    };

    return (
        <div className="AddBook">
          <Layout>
            <NavBar />
            <Content>
                <br></br>
                <h2>Add a new book to the database.</h2>
                <Form {...layout} name="nest-messages"  onFinish={onFinish} style={{width: '75%'}} validateMessages={validateMessages}>
                    <Form.Item name="title" label="Title" rules={[{ required: true }]}>
                        <Input style={{width: '75%'}} />
                    </Form.Item>
                    <Form.Item name="title2" label="Native/Alternate Title">
                        <Input style={{width: '75%'}} />
                    </Form.Item>
                    <Form.Item name="author" label="Author">
                        <Input style={{width: '35%'}} />
                    </Form.Item>
                    <Form.Item name="language" label="Language">
                        <Input style={{width: '35%'}} />
                    </Form.Item>
                    <Form.Item name="bookType" label="Book Type">
                        <Input style={{width: '35%'}} />
                    </Form.Item>
                    <Form.Item name="genre" label="Genre">
                        <Select placeholder="Select genre" style={{width: '35%'}}>
                                <Option value="Fantasy">Fantasy</Option>
                                <Option value="Horror">Horror</Option>
                                <Option value="Humor">Humor</Option>
                                <Option value="Mystery">Mystery</Option>
                                <Option value="Nonfiction">Nonfiction</Option>
                                <Option value="Romance">Romance</Option>
                                <Option value="Sci-fi">Sci-fi</Option>
                                <Option value="Thriller">Thriller</Option>
                            </Select>
                    </Form.Item>
                    <Form.Item name="wordCount" label="Word/Character Count" rules={[{ type: 'number' }]}>
                        <InputNumber />
                    </Form.Item>
                    <Form.Item name="ISBN" label="ISBN" rules={[{ type: 'number' }]}>
                        <InputNumber style={{width: '35%'}} />
                    </Form.Item>
                    <Form.Item name="summary" label="Summary">
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
