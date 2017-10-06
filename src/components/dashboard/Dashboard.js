import React, { Component } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
    render() {
        return (
            
            <div className='dashboard'>
                <Nav />
            </div>
        )
    }
}
