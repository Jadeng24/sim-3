import React, { Component } from 'react';
import './Nav.css';
import house from './house.png';
import search from './search.png';
import Dashboard from './../dashboard/Dashboard.js';
import Search from './../search/Search.js';
import { Link } from 'react-router-dom';

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
                    <Link to='/dashboard'><img src={house} alt='home' /></Link>
                    <Link to="/search"><img src={search} alt='search' /></Link>
                </div>

                <div className='centerNav'>
                    <p className="pageName"> Dashboard </p>
                </div>

                <div className='rightNav'>
                    <Link to="/">
                        <p className="logout">Logout</p></Link>
                </div>
            </div>
        )
    }

}