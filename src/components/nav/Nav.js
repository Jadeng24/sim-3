import React, { Component } from 'react';
import './Nav.css';
import house from './house.png';
import search from './search.png';
import Dashboard from './../dashboard/Dashboard.js';
import Search from './../search/Search.js';
export default class Nav extends Component {
    constructor() {
        super()
        this.state = {
            page: ''
        }
    }


    render() {
        return (
            <div className='nav'>
                <div className="leftNav">
                    <p className="Helo">Helo</p>
                    <a href='http://localhost:3000/#/dashboard'><img src={house} alt='home' /></a>
                    <a href='http://localhost:3000/#/search'><img src={search} alt='search' /></a>
                </div>

                <div className='centerNav'>
                    <p className="pageName"> Dashboard </p>
                </div>

                <div className='rightNav'>
                    <a href='http://localhost:3000/'>
                        <p className="logout">Logout</p></a>
                </div>
            </div>
        )
    }

}