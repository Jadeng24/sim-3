import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import smile from './smile.png';

export default function Login(props) {
    return (
        <div className='Login'>
            <div className="loginBox">
                <img src={smile} alt=""/>
                <h1>Helo</h1>
                <a href='http://localhost:3005/auth'><div className="loginBtn"><p className="loginP">Login / Register</p></div></a>
            </div>
        </div>
    )
}