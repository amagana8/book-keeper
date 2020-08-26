import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './App.css';
import {Layout, Table, Button} from 'antd';
import NavBar from './components/NavBar';
import GuestNavBar from './components/GuestNavBar';
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
    const history = useHistory();
    async function handleClick(record) {
        localStorage.setItem('title', record.Title);
        history.push("/addBooktoList");
    }

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
        },
        {
            title: 'Add',
            key: 'action',
            width: 100,
            render: (record) => (
                <a><Button onClick={() => {handleClick(record)}} type="primary">Add to Your List</Button></a>
            )
        }
    ];

    const renderNavBar = () => {
        if(localStorage.getItem('token')){
          return <NavBar />
        } else{
          return <GuestNavBar />
        }
      }
    return (
        <div className="Browse">
            <Layout>
                {renderNavBar()}
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
