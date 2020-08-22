import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {Layout, Menu} from 'antd';

const {Header, Content, Footer} = Layout;

const MyList = () => {
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
              <h2>Welcome to yourList.</h2>
            </Content>
            <Footer>
    
            </Footer>
          </Layout>
        </div>
      );
}

export default MyList;
