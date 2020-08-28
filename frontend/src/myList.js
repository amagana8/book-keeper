import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import NavBar from './components/NavBar';
import './App.css';
import {Layout, Table, Button} from 'antd';
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
        await axios.get("https://app-book-keeper.herokuapp.com/api/bookList/", config).then(
			res => {
				setloading(false);
				setstate(
					res.data.map(row => ({
						Title: row.bookTitle,
						Status: row.status,
                        Rating: row.bookRating,
                        Chapters: row.chaptersRead,
                        id: row.bookListID
                    }))
                );
            }
		);
    };
    
    const history = useHistory();
    async function handleDel(record) {
        let token = localStorage.getItem('token');
	    token = "Token " + token;
        var config = {
            method: 'delete',
            url: 'https://app-book-keeper.herokuapp.com/api/bookList/' + record.id + '/',
            headers: { 
              'Authorization': token
            }
          };
          
          axios(config)
          .then(function (response) {
            window.location.reload(false);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    async function handleEdit(record) {
        localStorage.setItem("ListID", record.id);
        localStorage.setItem("title", record.Title);
        history.push("/addBookToList");
    }

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
        },
        {
            title: 'Edit',
            key: 'action',
            width: 100,
            render: (record) => (
                <div>
                <a><Button onClick={() => {handleEdit(record)}}>Edit</Button> <Button danger onClick={() => {handleDel(record)}}>Remove</Button></a>
                </div>
            )
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
						/>
					)}
              	</div>
            </Content>
          </Layout>
        </div>
      );
}

export default MyList;
