import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import Browse from './browse';
import MyList from './myList';
import AddBook from './addBook';
import Login from './login';
import Register from './register';
import Logout from './logout';
import './App.css';
import logo from'./bookKeeper.png';
import {Layout, Typography, Button} from 'antd';
import NavBar from './components/NavBar';
import GuestNavBar from './components/GuestNavBar';

const {Title} = Typography;
const {Content} = Layout;

const App = () => (
  <Router>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/browse" component={withRouter(Browse)} />
    <Route expact path="/myList" component={withRouter(MyList)} />
    <Route expact path="/addBook" component={withRouter(AddBook)} />
    <Route exact path="/login" component={withRouter(Login)} />
    <Route exact path="/register" component={withRouter(Register)} />
    <Route exact path="/logout" component={withRouter(Logout)} />
    </Switch>
  </Router>
);

function Home() {
  const renderNavBar = () => {
    if(localStorage.getItem('token')){
      return <NavBar />
    } else{
      return <GuestNavBar />
    }
  }
  return (
    <div className="App">
      <Layout>
        {renderNavBar()}
        <Content>
          <br></br>
          <img src={logo} alt={""}/>
          <br></br>
          <br></br>
          <Title> Welcome to BookKeeper!</Title>
          <Title level={4}>Keep track of books you've read and plan to read.</Title>
          <Title level={4}>Works with traditional books and webnovels.</Title>
          <Title level={4}>Login or Create an Account Here!</Title>
          <br></br>
          <Button type="primary" size={'large'}><Link to="/login">Login</Link></Button>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
