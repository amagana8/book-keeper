import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import Browse from './browse';
import MyList from './myList';
import AddBook from './addBook';
import Login from './login';
import Register from './register';
import './App.css';
import {Layout, Menu} from 'antd';


const {Header, Content} = Layout;

const App = () => (
  <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/browse" component={withRouter(Browse)} />
    <Route expact path="/myList" component={withRouter(MyList)} />
    <Route expact path="/addBook" component={withRouter(AddBook)} />
    <Route exact path="/login" component={withRouter(Login)} />
    <Route exact path="/register" component={withRouter(Register)} />
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
            <Menu.Item key="3"><Link to="/myList">My List</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/addBook">Add Book</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/login">Login</Link></Menu.Item>
          </Menu>
        </Header>
        <Content>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
