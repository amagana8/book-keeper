import React, {useState, useEffect} from 'react';
import './App.css';
import {Layout, Table} from 'antd';
import NavBar from './components/NavBar';
import axios from 'axios';

const {Content} = Layout;

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
                        Language: row.language,
                        wordCount: row.wordCount,
                        BookType: row.bookType,
                        Genre: row.genre,
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
            width: 120
        },
        {
            title: "Language",
            dataIndex: "Language",
            width: 100
        },
        {
            title: "Word Count",
            dataIndex: "wordCount",
            width: 100
        },
        {
            title: "Type",
            dataIndex: "BookType",
            width: 100
        },
        {
            title: "Genre",
            dataIndex: "Genre",
            width: 100
        }
    ];

    return (
        <div className="Browse">
            <Layout>
                <NavBar />
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
            </Layout>
        </div>
    );
}

export default Browse;
