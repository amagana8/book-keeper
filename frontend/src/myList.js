import React, {useState, useEffect} from 'react';
import NavBar from './components/NavBar';
import './App.css';
import {Layout, Table} from 'antd';
import axios from 'axios';

const {Content} = Layout;

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

export default MyList;
