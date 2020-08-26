import React from 'react';
import GuestNavBar from './components/GuestNavBar';
import {Layout} from 'antd';
import './App.css';
import axios from 'axios';

const {Content} = Layout;

const Logout = () => {
    async function logout() {
        let token = localStorage.getItem('token');
        token = "Token " + token;
        let config = {
            headers: {
                'Authorization': token,
            }
        }
        await axios.post("http://127.0.0.1:8000/api/auth/logout", config);
    }
    logout();
    localStorage.clear();
    return(
        <div className="App">
            <Layout>
                <GuestNavBar />
                <Content>
                    <br></br>
                    <h2>You have been logged out.</h2>
                </Content>
            </Layout>
        </div>
    );
}

export default Logout;
