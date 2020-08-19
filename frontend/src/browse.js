import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {Layout, Menu, Table} from 'antd';
import axios from 'axios';

const {Header, Content, Footer} = Layout;

const Browse = () => {
    const [state, setstate] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        await axios.get("http://localhost:8000/api/book/").then(
            res => {
                setloading(false);
                setstate(
                    res.data.map(row => ({
                        Title: row.title,
                        Author: row.author,
                        id: row.bookID
                    }))
                );
            }
        );
    };
    
    const columns = [
        {
            title: "Title",
            dataIndex: "Title",
            width: 150
        },
        {
            title: "Author",
            dataIndex: "Author",
            width: 150
        }
    ];

    return (
        <div className="App">
            <Layout>
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/browse">Browse</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <div>
                        {loading ? (
                            "Loading"
                        ) : (
                            <Table
                            columns={columns}
                            dataSource={state}
                            pagination={{ pageSize: 50 }}
                            scroll={{ y: 240 }}
                            />
                        )}
                    </div>
                </Content>
                <Footer>
    
                </Footer>
            </Layout>
        </div>
    );
}

export default Browse;
