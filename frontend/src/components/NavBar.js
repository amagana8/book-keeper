import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import {Layout, Menu} from 'antd';

const {Header} = Layout;

export default class NavBar extends React.Component {
    render() {
        return (
        <Header>
          <Menu theme="dark" mode="horizontal" >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/browse">Browse</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/myList">My List</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/addBook">Add Book</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/logout">Logout</Link></Menu.Item>
          </Menu>
        </Header>
        );
    }
}