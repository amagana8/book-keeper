import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {Layout, Menu, Table} from 'antd';
import axios from 'axios';

const {Header, Content} = Layout;

const MyList = () => {
    const [state, setstate] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        getData();
    }, []);
	let token = localStorage.getItem('token');
	token = "Token " + token;
	let config = {
		headers: {
			'Authorization': token,
			'Content-Type': 'application/x-www-form-urlencoded',
		}
	}
    const getData = async () => {
        await axios.get("http://localhost:8000/api/bookList/", config).then(
			res => {
				setloading(false);
				setstate(
					res.data.map(row => ({
						Title: row.bookTitle,
						Status: row.status,
                        Rating: row.bookRating,
                        Chapters: row.chaptersRead,
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
            title: "Status",
            dataIndex: "Status",
            width: 120
        },
        {
            title: "Rating",
            dataIndex: "Rating",
            width: 100
        },
        {
            title: "Chapters",
            dataIndex: "Chapters",
            width: 100
        }
    ];

    return (
        <div className="MyList">
          <Layout>
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
                <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/browse">Browse</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/myList">My List</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/addBook">Add Book</Link></Menu.Item>
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
          </Layout>
        </div>
      );
}

export default MyList;
