import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Nav from './../nav/Nav.js';

export default class Search extends Component {
    render() {
        return (

            <div className='search'>
                <Nav />
            </div>
        )
    }
}