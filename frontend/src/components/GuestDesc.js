import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import logo from'../bookKeeper.png';
import {Typography, Button} from 'antd';

const {Title} = Typography;

export default class GuestDesc extends React.Component {
    render() {
        return (
            <div>
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
            </div>
        );
    }
}