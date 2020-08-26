import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import Browse from './browse';
import MyList from './myList';
import AddBook from './addBook';
import Login from './login';
import Register from './register';
import Logout from './logout';
import AddBookToList from './addBookToList';
import './App.css';
import {Layout} from 'antd';
import NavBar from './components/NavBar';
import GuestNavBar from './components/GuestNavBar';
import Desc from './components/Desc';
import GuestDesc from './components/GuestDesc';

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
    <Route exact path="/addBookToList" component={withRouter(AddBookToList)} />
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
  const renderHome = () => {
    if(localStorage.getItem('token')){
      return <Desc />
    } else{
      return <GuestDesc />
    }
  }
  return (
    <div className="App">
      <Layout>
        {renderNavBar()}
        <Content>
          {renderHome()}
        </Content>
      </Layout>
    </div>
  );
}

export default App;
