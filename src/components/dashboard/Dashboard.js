import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Nav from './../nav/Nav.js';

export default class Dashboard extends Component {
    render() {
        return (
            
            <div className='dashboard'>
                <Nav />
            </div>
        )
    }
}
