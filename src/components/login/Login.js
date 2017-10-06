import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login(props) {
    return (
        <div className='Login'>
                <a href='http://localhost:3005/auth'><button>Log In</button></a>
        </div>
    )
}