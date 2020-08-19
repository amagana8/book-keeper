import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import {Layout, Menu} from 'antd';

const {Header, Content, Footer} = Layout;

const Browse = () => {
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
                    <h2>Browse Books Here.</h2>
                </Content>
                <Footer>

                </Footer>
            </Layout>
        </div>
    );
}

export default Browse;
