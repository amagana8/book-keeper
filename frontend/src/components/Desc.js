import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import logo from'../bookKeeper.png';
import {Typography} from 'antd';

const {Title} = Typography;

export default class Desc extends React.Component {
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
            <Title level={4}><Link to="/browse">Look for books</Link> or <Link to="/myList">view your list!</Link></Title>
            <br></br>
            </div>
        );
    }
}