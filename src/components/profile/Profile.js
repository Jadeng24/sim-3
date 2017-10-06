import React, { Component } from 'react';
import './Private.css';
import axios from 'axios';
import { getUserInfo } from './../../ducks/users.js';
import { connect } from 'react-redux';
import Nav from './../nav/Nav.js'

class Private extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    render() {
        return (
            <div className='profile'>
                <Nav />
                <span>Name</span><input></input>
            </div>
        )
    }
}