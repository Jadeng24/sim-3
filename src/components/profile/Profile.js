import React, { Component } from 'react';
import './Private.css';
import axios from 'axios';
import { getUserInfo } from './../../ducks/users.js';
import { connect } from 'react-redux';


class Private extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        }
    }

    render() {
        return (
            <div className=''>
                <span>Name</span><input></input>
            </div>
        )
    }
}