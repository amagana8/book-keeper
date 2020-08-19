import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import Browse from './browse';
import './App.css';
import {Layout, Menu} from 'antd';

const {Header, Content, Footer} = Layout;

const App = () => (
  <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/browse" component={withRouter(Browse)} />
    </Switch>
  </Router>
);

function Home() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/browse">Browse</Link></Menu.Item>
          </Menu>
        </Header>
        <Content>
          <h2>Welcome to BookList.</h2>
        </Content>
        <Footer>

        </Footer>
      </Layout>
    </div>
  );
}

export default App;
